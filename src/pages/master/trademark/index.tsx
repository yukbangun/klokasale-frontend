import { IconDelete, IconEdit, IconPlus } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Pagination, Table, Typography } from '@douyinfe/semi-ui';
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
  const [sort, setSort] = useState<TSort | string>(DEFAULT_SORT);
  const [filters, setFilters] = useState<unknown>({});
  const [pagination, setPagination] = useState<TPagination>({
    page: 1,
  });

  const columns = [
    {
      title: 'Kode Trademark',
      dataIndex: 'trademark_code',
      width: 150,
    },
    {
      title: 'Trademark',
      dataIndex: 'trademark',
      width: 250,
    },
    {
      fixed: true,
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

  function handleChangeSort(sort: TSort | string) {
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
              onChange={(sort: unknown) => handleChangeSort(sort as TSort | string)}
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
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
            {
              trademark_code: 'AA',
              trademark: 'Angsa Anggun',
            },
          ]}
          empty={
            <Empty
              image={<IllustrationNoContent className={styles.noDataDisplay} />}
              description={'Belum ada trademark'}
            />
          }
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
