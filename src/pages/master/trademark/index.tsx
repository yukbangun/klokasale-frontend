import { IconDelete, IconEdit } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Table, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import { TRADEMARK_FILTER_FIELDS } from 'src/constants/master/trademark/filter';
import { TRADEMARK_SORT_OPTIONS } from 'src/constants/master/trademark/sort';
import { DEFAULT_SORT } from 'src/constants/sort';
import useAddTrademark from 'src/hooks/master/trademark/add-trademark';
import useToolbar from 'src/hooks/toolbar';
import styles from './index.module.scss';

const { Title, Text } = Typography;

export default function MasterTrademarkPage() {
  const [trademarkList, setTrademarkList] = useState<unknown[]>([]);
  const { addTrademarkForm, handleShowAddTrademarkForm } = useAddTrademark({});
  const { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } = useToolbar({
    initialSort: DEFAULT_SORT,
    sortOptions: TRADEMARK_SORT_OPTIONS,
    initialFilters: { trademark: undefined, trademark_code: undefined },
    filterFields: TRADEMARK_FILTER_FIELDS,
    addNewDataLabel: 'Tambah Trademark',
    onClickAddNewData: handleShowAddTrademarkForm,
    initialPagination: { page: 1 },
  });

  const columns: ColumnProps[] = [
    {
      title: 'Kode Trademark',
      dataIndex: 'trademark_code',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Trademark',
      dataIndex: 'trademark',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
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

  function getTrademarks() {}
  function updateTrademarks() {}

  useEffect(() => {}, []);

  return (
    <div className={styles.masterTrademarkPage}>
      <Title heading={1}>Trademark</Title>
      <div className={styles.trademarkContainer}>
        {toolbar}
        {showFiltersForm && filtersForm}
        <Table
          className={styles.trademarkTable}
          columns={columns}
          pagination={false}
          dataSource={[
            {
              trademark_code: 'AA',
              trademark:
                'Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun',
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
        />
        {paginationDisplay}
      </div>
      {addTrademarkForm}
    </div>
  );
}
