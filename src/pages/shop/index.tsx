import { IconDelete, IconEdit } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Spin, Table, Toast, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import { ELocalStorageKey } from 'src/constants/local-storage';
import { SHOP_FILTER_FIELDS } from 'src/constants/shop/filter';
import { SHOP_SORT_OPTIONS } from 'src/constants/shop/sort';
import { DEFAULT_SORT } from 'src/constants/sort';
import useAddShop from 'src/hooks/shop/add-shop';
import useDeleteShop from 'src/hooks/shop/delete-shop';
import useEditShop from 'src/hooks/shop/edit-shop';
import useToolbar from 'src/hooks/toolbar';
import { isValidNumber } from 'src/utils/number';
import styles from './index.module.scss';
import { EShopState } from 'src/constants/shop/state';
import NoPermissionDisplay from 'src/components/no-permission-display';
import ErrorDisplay from 'src/components/error-display';
import { TError } from 'src/types/error';
import { axiosInstance } from 'src/constants/axios';
import { ShopShopResp, ShopsApi } from 'src/services';
import { isNullish } from 'src/utils/nullish';

const { Title, Text } = Typography;

export default function ShopPage() {
  const localStoragePageSize = localStorage.getItem(ELocalStorageKey.PageSize);
  const isLocalStoragePageSizeValidNumber = isValidNumber(localStoragePageSize || '');

  const [isLoading, setIsLoading] = useState(false);
  const [shopList, setShopList] = useState<ShopShopResp[]>();
  const [shopState, setShopState] = useState<EShopState>();

  const { addShopForm, handleShowAddShopForm } = useAddShop({ onSubmitSuccess: updateShopList });
  const { editShopForm, handleShowEditShopForm } = useEditShop({ onSubmitSuccess: updateShopList });
  const { deleteShopModal, handleShowDeleteShopModal } = useDeleteShop({ onSubmitSuccess: updateShopList });
  const { sort, filters, pagination, setPagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } =
    useToolbar({
      initialSort: DEFAULT_SORT,
      sortOptions: SHOP_SORT_OPTIONS,
      initialFilters: { name: undefined },
      filterFields: SHOP_FILTER_FIELDS,
      addNewDataLabel: 'Tambah Toko',
      onClickAddNewData: handleShowAddShopForm,
      initialPagination: { page: 1, pageSize: isLocalStoragePageSizeValidNumber ? Number(localStoragePageSize) : 10 },
    });

  const columns: ColumnProps[] = [
    {
      title: 'Nama',
      dataIndex: 'name',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Tanggal Dibuat',
      dataIndex: 'createdAt',
      render: text => {
        const date = new Date(text);
        const stringifiedDate = date.toLocaleString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        });
        return <Text ellipsis={{ showTooltip: true }}>{stringifiedDate}</Text>;
      },
    },
    {
      fixed: 'right',
      render: (_: unknown, record: ShopShopResp) => {
        const { id, name, address } = record || {};
        return (
          <div className={styles.editAndDeleteContainer}>
            <Button icon={<IconEdit />} onClick={() => handleShowEditShopForm({ id, name, address })} />
            <Button icon={<IconDelete />} onClick={() => handleShowDeleteShopModal([{ id, name, address }])} />
          </div>
        );
      },
    },
  ];

  async function getShopList() {
    try {
      setIsLoading(true);
      const shopApi = new ShopsApi(undefined, undefined, axiosInstance);
      const res = await shopApi.getShops(1, pagination.page, pagination.pageSize, sort?.field, sort?.direction);
      const { data } = res || {};
      const { shops } = data?.data || {};
      const hasShops = !isNullish(shops) && Array.isArray(shops) && shops?.length > 0;
      if (hasShops) {
        setShopState(EShopState.HasResult);
      } else {
        setShopState(EShopState.NoResult);
      }
      return data?.data;
    } catch (e) {
      const { response } = e as TError;
      const { data } = response || {};
      const { error } = data || {};
      const { message } = error || {};
      Toast.error(message);
      setShopState(EShopState.Fail);
    } finally {
      setIsLoading(false);
    }
  }
  async function updateShopList() {
    const data = await getShopList();
    const { pagination: resPagination, shops } = data || {};
    const hasShops = !isNullish(shops) && Array.isArray(shops) && shops?.length > 0;
    const hasPagination = !isNullish(resPagination);
    if (hasShops) {
      setShopList(shops);
    }
    if (hasPagination) {
      setPagination(pagination => ({
        ...pagination,
        total: resPagination?.totalRecordCount || 0,
      }));
    }
  }

  useEffect(() => {
    updateShopList();
  }, [sort, pagination?.page, filters]);

  const firstLoadDisplay = isLoading ? (
    <div className={styles.firstLoadDisplay}>
      <Spin />
    </div>
  ) : (
    <></>
  );

  const noPermissionDisplay = (
    <div className={styles.noPermissionDisplayContainer}>
      <NoPermissionDisplay />
    </div>
  );

  const errorDisplay = (
    <div className={styles.errorDisplayContainer}>
      <ErrorDisplay onClickRetry={updateShopList} />
    </div>
  );

  const shopListDisplay = (
    <div className={styles.shopPage}>
      {/* TODO: add shop group */}
      <Title heading={1}>Toko</Title>
      <div className={styles.shopContainer}>
        {toolbar}
        {showFiltersForm && filtersForm}
        {shopState === EShopState?.Fail ? (
          errorDisplay
        ) : (
          <Table
            className={styles.shopTable}
            columns={columns}
            pagination={false}
            dataSource={shopList}
            empty={
              <Empty
                image={<IllustrationNoContent className={styles.noDataDisplay} />}
                description={'Belum ada toko'}
              />
            }
          />
        )}
        {paginationDisplay}
      </div>
      {addShopForm}
      {editShopForm}
      {deleteShopModal}
    </div>
  );

  const display = (() => {
    switch (shopState) {
      case EShopState.NoPermission:
        return noPermissionDisplay;
      case EShopState.Fail:
      case EShopState.NoResult:
      case EShopState.HasResult:
        return shopListDisplay;
      default:
        return firstLoadDisplay;
    }
  })();

  return display;
}
