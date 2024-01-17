import { IconDelete, IconEdit } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Table, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import { UOM_FILTER_FIELDS } from 'src/constants/master/uom/filter';
import { UOM_SORT_OPTIONS } from 'src/constants/master/uom/sort';
import { DEFAULT_SORT } from 'src/constants/sort';
import useAddUom from 'src/hooks/master/uom/add-uom';
import useToolbar from 'src/hooks/toolbar';
import styles from './index.module.scss';
import useEditUom from 'src/hooks/master/uom/edit-uom';
import useDeleteUom from 'src/hooks/master/uom/delete-uom';
import { ELocalStorageKey } from 'src/constants/local-storage';
import { isValidNumber } from 'src/utils/number';

const { Title, Text } = Typography;

export default function MasterUomPage() {
  const localStoragePageSize = localStorage.getItem(ELocalStorageKey.PageSize);
  const isLocalStoragePageSizeValidNumber = isValidNumber(localStoragePageSize || '');

  const [uomList, setUomList] = useState<unknown[]>([]);
  const { addUomForm, handleShowAddUomForm } = useAddUom({});
  const { editUomForm, handleShowEditUomForm } = useEditUom({});
  const { deleteUomModal, handleShowDeleteUomModal } = useDeleteUom({});
  const { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } = useToolbar({
    initialSort: DEFAULT_SORT,
    sortOptions: UOM_SORT_OPTIONS,
    initialFilters: { uom: undefined, uomCode: undefined },
    filterFields: UOM_FILTER_FIELDS,
    addNewDataLabel: 'Tambah Uom',
    onClickAddNewData: handleShowAddUomForm,
    initialPagination: { page: 1, pageSize: isLocalStoragePageSizeValidNumber ? Number(localStoragePageSize) : 10 },
  });

  const columns: ColumnProps[] = [
    {
      title: 'Satuan',
      dataIndex: 'uomName',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Deskripsi',
      dataIndex: 'description',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      fixed: 'right',
      render: (_: unknown, record: Record<string, unknown>) => {
        const { uomName, description } = record || {};
        return (
          <div className={styles.editAndDeleteContainer}>
            <Button icon={<IconEdit />} onClick={() => handleShowEditUomForm({ uomName, description })} />
            <Button icon={<IconDelete />} onClick={() => handleShowDeleteUomModal([{ uomName, description }])} />
          </div>
        );
      },
    },
  ];

  function getUomList() {}
  function updateUomList() {}

  useEffect(() => {}, []);

  return (
    <div className={styles.masterUomPage}>
      <Title heading={1}>Satuan</Title>
      <div className={styles.uomContainer}>
        {toolbar}
        {showFiltersForm && filtersForm}
        <Table
          className={styles.uomTable}
          columns={columns}
          pagination={false}
          dataSource={[
            {
              uomName: 'kg',
              description:
                'Kilogram Kilogram Kilogram Kilogram Kilogram Kilogram Kilogram Kilogram Kilogram Kilogram Kilogram',
              key: 0,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 1,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 2,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 3,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 4,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 5,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 6,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 7,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 8,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 9,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 10,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 11,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 12,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 13,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 14,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 15,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 16,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 17,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 18,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 19,
            },
            {
              uomName: 'dus',
              description: 'Dus',
              key: 20,
            },
          ]}
          empty={
            <Empty image={<IllustrationNoContent className={styles.noDataDisplay} />} description={'Belum ada uom'} />
          }
        />
        {paginationDisplay}
      </div>
      {addUomForm}
      {editUomForm}
      {deleteUomModal}
    </div>
  );
}
