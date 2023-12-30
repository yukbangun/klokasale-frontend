import { IconDelete, IconEdit, IconPlus } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Pagination, Table, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import ButtonDropdown from 'src/components/dropdown-button';
import { TRADEMARK_SORT_OPTIONS } from 'src/constants/master/trademark/sort';
import { DEFAULT_SORT } from 'src/constants/sort';
import useAddTrademark from 'src/hooks/master/trademark/add-trademark';
import { TPagination } from 'src/types/pagination';
import { TSort } from 'src/types/sort';
import styles from './index.module.scss';

const { Title } = Typography;

export default function MasterTrademarkPage() {
  const [trademarkList, setTrademarkList] = useState<unknown[]>([]);
  const { addTrademarkForm, handleShowAddTrademarkForm } = useAddTrademark({});
  const [sort, setSort] = useState<TSort>(DEFAULT_SORT);
  const [filters, setFilters] = useState<unknown>({});
  const [pagination, setPagination] = useState<TPagination>({
    page: 1,
  });

  const columns: ColumnProps[] = [
    {
      title: 'Kode Trademark',
      dataIndex: 'trademark_code',
    },
    {
      title: 'Trademark',
      dataIndex: 'trademark',
    },
    {
      fixed: 'right',
      render: (_: unknown, record: unknown) => {
        return (
          <div className={styles.editAnDeleteContainer}>
            <Button icon={<IconEdit />} onClick={() => console.log(record)} />
            <Button icon={<IconDelete />} onClick={() => console.log(record)} />
          </div>
        );
      },
    },
  ];

  function handleChangeSort(sort: TSort) {
    setSort(sort);
  }

  function getTrademarks() {}
  function updateTrademarks() {}

  useEffect(() => {}, []);

  return (
    <div className={styles.masterTrademarkPage}>
      <Title heading={1}>Trademark</Title>
      <div className={styles.trademarkContainer}>
        <div className={styles.toolbar}>
          <div className={styles.sortAndFilter}>
            <ButtonDropdown
              value={sort}
              options={TRADEMARK_SORT_OPTIONS}
              onChange={(sort: unknown) => handleChangeSort(sort as TSort)}
            />
          </div>
          <Button theme="solid" icon={<IconPlus />} onClick={handleShowAddTrademarkForm}>
            Tambah Trademark
          </Button>
        </div>
        <Table
          className={styles.trademarkTable}
          columns={columns}
          pagination={false}
          dataSource={[
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 0,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 1,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 2,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 3,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 4,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 5,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 6,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 7,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 8,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 9,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 10,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 11,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 12,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 13,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 14,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 15,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 16,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 17,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 18,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 19,
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
              key: 20,
            },
          ]}
          empty={
            <Empty
              image={<IllustrationNoContent className={styles.noDataDisplay} />}
              description={'Belum ada trademark'}
            />
          }
          // rowSelection={{
          //   onChange: (selectedRowKeys, selectedRows) => {
          //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          //   },
          //   onSelectAll: () => {},
          //   fixed: true,
          // }}
        />
        <Pagination
          total={80}
          currentPage={pagination.page}
          className={styles.pagination}
          popoverPosition="top"
        ></Pagination>
      </div>
      {addTrademarkForm}
    </div>
  );
}
