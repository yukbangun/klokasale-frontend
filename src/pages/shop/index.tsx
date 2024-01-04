import { IconDelete, IconEdit, IconLock } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Table, Tooltip, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import { TRADEMARK_FILTER_FIELDS } from 'src/constants/master/trademark/filter';
import { TRADEMARK_SORT_OPTIONS } from 'src/constants/master/trademark/sort';
import { DEFAULT_SORT } from 'src/constants/sort';
import useAddTrademark from 'src/hooks/master/trademark/add-trademark';
import useToolbar from 'src/hooks/toolbar';
import styles from './index.module.scss';
import useEditTrademark from 'src/hooks/master/trademark/edit-trademark';
import useDeleteTrademark from 'src/hooks/master/trademark/delete-trademark';
import useAddUser from 'src/hooks/user/add-user';
import { USER_SORT_OPTIONS } from 'src/constants/user/sort';
import { USERNAME_FILTER_FIELDS } from 'src/constants/user/filter';
import useEditUser from 'src/hooks/user/edit-user';
import useDeleteUser from 'src/hooks/user/delete-user';
import useResetUserPassword from 'src/hooks/user/reset-user-password';
import useAddShop from 'src/hooks/shop/add-shop';
import { SHOP_SORT_OPTIONS } from 'src/constants/shop/sort';
import { SHOP_FILTER_FIELDS } from 'src/constants/shop/filter';
import useEditShop from 'src/hooks/shop/edit-shop';
import useDeleteShop from 'src/hooks/shop/delete-shop';

const { Title, Text } = Typography;

export default function ShopPage() {
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
    initialPagination: { page: 1 },
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
