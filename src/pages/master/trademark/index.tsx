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
import useEditTrademark from 'src/hooks/master/trademark/edit-trademark';
import useDeleteTrademark from 'src/hooks/master/trademark/delete-trademark';
import { ELocalStorageKey } from 'src/constants/local-storage';
import { isValidNumber } from 'src/utils/number';

const { Title, Text } = Typography;

export default function MasterTrademarkPage() {
  const localStoragePageSize = localStorage.getItem(ELocalStorageKey.PageSize);
  const isLocalStoragePageSizeValidNumber = isValidNumber(localStoragePageSize || '');

  const [trademarkList, setTrademarkList] = useState<unknown[]>([]);
  const { addTrademarkForm, handleShowAddTrademarkForm } = useAddTrademark({});
  const { editTrademarkForm, handleShowEditTrademarkForm } = useEditTrademark({});
  const { deleteTrademarkModal, handleShowDeleteTrademarkModal } = useDeleteTrademark({});
  const { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } = useToolbar({
    initialSort: DEFAULT_SORT,
    sortOptions: TRADEMARK_SORT_OPTIONS,
    initialFilters: { trademark: undefined, trademarkCode: undefined },
    filterFields: TRADEMARK_FILTER_FIELDS,
    addNewDataLabel: 'Tambah Trademark',
    onClickAddNewData: handleShowAddTrademarkForm,
    initialPagination: { page: 1, pageSize: isLocalStoragePageSizeValidNumber ? Number(localStoragePageSize) : 10 },
  });

  const columns: ColumnProps[] = [
    {
      title: 'Kode Trademark',
      dataIndex: 'trademarkCode',
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
      render: (_: unknown, record: Record<string, unknown>) => {
        const { trademarkCode, trademark } = record || {};
        return (
          <div className={styles.editAndDeleteContainer}>
            <Button icon={<IconEdit />} onClick={() => handleShowEditTrademarkForm({ trademarkCode, trademark })} />
            <Button
              icon={<IconDelete />}
              onClick={() => handleShowDeleteTrademarkModal([{ trademarkCode, trademark }])}
            />
          </div>
        );
      },
    },
  ];

  function getTrademarkList() {}
  function updateTrademarkList() {}

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
              trademarkCode: 'AA',
              trademark:
                'Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun Angsa Anggun',
              key: 0,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 1,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 2,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 3,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 4,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 5,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 6,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 7,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 8,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 9,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 10,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 11,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 12,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 13,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 14,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 15,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 16,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 17,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 18,
            },
            {
              trademarkCode: 'AA',
              trademark: 'Angsa Anggun',
              key: 19,
            },
            {
              trademarkCode: 'AA',
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
      {editTrademarkForm}
      {deleteTrademarkModal}
    </div>
  );
}
