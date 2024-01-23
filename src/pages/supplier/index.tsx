import { IconDelete, IconEdit, IconLock } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Table, Tooltip, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import { DEFAULT_SORT } from 'src/constants/sort';
import { SUPPLIER_FILTER_FIELDS } from 'src/constants/master/supplier/filter';
import { SUPPLIER_SORT_OPTIONS } from 'src/constants/master/supplier/sort';
import useToolbar from 'src/hooks/toolbar';
import useAddSupplier from 'src/hooks/master/supplier/add-supplier';
import useDeleteSupplier from 'src/hooks/master/supplier/delete-supplier';
import useEditSupplier from 'src/hooks/master/supplier/edit-supplier';
import styles from './index.module.scss';
import { isValidNumber } from 'src/utils/number';
import { ELocalStorageKey } from 'src/constants/local-storage';

const { Title, Text } = Typography;

export default function MasterSupplierPage() {
  const localStoragePageSize = localStorage.getItem(ELocalStorageKey.PageSize);
  const isLocalStoragePageSizeValidNumber = isValidNumber(localStoragePageSize || '');

  const [supplierList, setSupplierList] = useState<unknown[]>([]);
  const { addSupplierForm, handleShowAddSupplierForm } = useAddSupplier({});
  const { editSupplierForm, handleShowEditSupplierForm } = useEditSupplier({});
  const { deleteSupplierModal, handleShowDeleteSupplierModal } = useDeleteSupplier({});
  const { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } = useToolbar({
    initialSort: DEFAULT_SORT,
    sortOptions: SUPPLIER_SORT_OPTIONS,
    initialFilters: { suppliername: undefined, name: undefined },
    filterFields: SUPPLIER_FILTER_FIELDS,
    addNewDataLabel: 'Tambah Supplier',
    onClickAddNewData: handleShowAddSupplierForm,
    initialPagination: { page: 1, pageSize: isLocalStoragePageSizeValidNumber ? Number(localStoragePageSize) : 10 },
  });

  const columns: ColumnProps[] = [
    {
      title: 'Nama Supplier',
      dataIndex: 'supplierName',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'No Akun Bank',
      dataIndex: 'bankAccountNumber',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'No Telp',
      dataIndex: 'phoneNumber',
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
        const { supplierName, bankAccountNumber, address, phoneNumber } = record || {};
        return (
          <div className={styles.editAndDeleteContainer}>
            <Button
              icon={<IconEdit />}
              onClick={() => handleShowEditSupplierForm({ supplierName, bankAccountNumber, address, phoneNumber })}
            />
            <Button
              icon={<IconDelete />}
              onClick={() => handleShowDeleteSupplierModal([{ supplierName, bankAccountNumber, address, phoneNumber }])}
            />
          </div>
        );
      },
    },
  ];

  function getSupplierList() {}
  function updateSupplierList() {}

  useEffect(() => {}, []);

  return (
    <div className={styles.supplierPage}>
      <Title heading={1}>Supplier</Title>
      <div className={styles.supplierContainer}>
        {toolbar}
        {showFiltersForm && filtersForm}
        <Table
          className={styles.supplierTable}
          columns={columns}
          pagination={false}
          dataSource={[
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
            {
              supplierName: 'bambang1234',
              bankAccountNumber: '1234 5678 1234 5678',
              phoneNumber: '+6282162174879',
              address: 'Jl. Jalan No 102B',
            },
          ]}
          empty={
            <Empty
              image={<IllustrationNoContent className={styles.noDataDisplay} />}
              description={'Belum ada supplier'}
            />
          }
        />
        {paginationDisplay}
      </div>
      {addSupplierForm}
      {editSupplierForm}
      {deleteSupplierModal}
    </div>
  );
}
