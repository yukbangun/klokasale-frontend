import { IconDelete, IconEdit } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Table, Typography } from '@douyinfe/semi-ui';
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

const { Title, Text } = Typography;

export default function ShopPage() {
  const localStoragePageSize = localStorage.getItem(ELocalStorageKey.PageSize);
  const isLocalStoragePageSizeValidNumber = isValidNumber(localStoragePageSize || '');

  const [shopList, setShopList] = useState<unknown[]>([]);
  const { addShopForm, handleShowAddShopForm } = useAddShop({});
  const { editShopForm, handleShowEditShopForm } = useEditShop({});
  const { deleteShopModal, handleShowDeleteShopModal } = useDeleteShop({});
  const { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } = useToolbar({
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
      fixed: 'right',
      render: (_: unknown, record: Record<string, unknown>) => {
        const { name, address } = record || {};
        return (
          <div className={styles.editAndDeleteContainer}>
            <Button icon={<IconEdit />} onClick={() => handleShowEditShopForm({ name, address })} />
            <Button icon={<IconDelete />} onClick={() => handleShowDeleteShopModal([{ name, address }])} />
          </div>
        );
      },
    },
  ];

  function getShopList() {}
  function updateShopList() {}

  useEffect(() => {}, []);

  return (
    <div className={styles.shopPage}>
      {/* TODO: add shop group */}
      <Title heading={1}>Toko</Title>
      <div className={styles.shopContainer}>
        {toolbar}
        {showFiltersForm && filtersForm}
        <Table
          className={styles.shopTable}
          columns={columns}
          pagination={false}
          dataSource={[
            {
              name: 'Toko Maju Mundur',
              address:
                'Jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
            {
              name: 'Toko Maju Mundur',
              address: 'Jalan jalan',
            },
          ]}
          empty={
            <Empty image={<IllustrationNoContent className={styles.noDataDisplay} />} description={'Belum ada toko'} />
          }
        />
        {paginationDisplay}
      </div>
      {addShopForm}
      {editShopForm}
      {deleteShopModal}
    </div>
  );
}
