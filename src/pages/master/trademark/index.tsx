import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Form, Pagination, Select, Spin, Table, Typography } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { TPagination } from 'src/types/pagination';
import { TSort } from 'src/types/sort';
import styles from './index.module.scss';
import { IconPlus } from '@douyinfe/semi-icons';
import { DEFAULT_SORT, SortDirection } from 'src/constants/sort';
import { TRADEMARK_SORT_OPTIONS } from 'src/constants/master/trademark/sort';
import ButtonDropdown from 'src/components/dropdown-button';

const { Title } = Typography;

export default function MasterTrademarkPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trademarkList, setTrademarkList] = useState<unknown[]>([]);
  const [sort, setSort] = useState<TSort | string>(DEFAULT_SORT);
  const [filters, setFilters] = useState<unknown>({});
  const [pagination, setPagination] = useState<TPagination>({
    page: 1,
  });

  const columns = [
    {
      title: 'Kode Trademark',
      dataIndex: 'trademark_code',
      width: 100,
    },
    {
      title: 'Trademark',
      dataIndex: 'trademark',
      width: 200,
    },
  ];

  function handleChangeSort(sort: TSort | string) {
    setSort(sort);
  }

  function getTrademarks() {}
  function updateTrademarks() {}

  function handleAddTrademark(values: unknown) {
    try {
      // TODO: handle submit trademark
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {}, []);

  return (
    <div className={styles.masterTrademarkPage}>
      <Title heading={1}>Trademark</Title>
      <div className={styles.trademarkContainer}>
        {/* <Form className={styles.tradeMarkForm} onSubmit={handleAddTrademark}>
          <Form.Input
            rules={[{ required: true, message: 'kode trademark harus diisi' }]}
            field="trademark_code"
            label="Kode Trademark"
            placeholder="Masukkan kode trademark"
          />
          <Form.Input
            rules={[{ required: true, message: 'trademark harus diisi' }]}
            field="trademark"
            label="Trademark"
            placeholder="Masukkan trademark"
          />
          <Button className={styles.submitBtn} htmlType="submit">
            {isSubmitting ? <Spin /> : 'Submit'}
          </Button>
        </Form> */}
        <div className={styles.toolbar}>
          <div className={styles.sortAndFilter}>
            <ButtonDropdown
              value={sort}
              options={TRADEMARK_SORT_OPTIONS}
              onChange={(sort: unknown) => handleChangeSort(sort as TSort | string)}
            />
          </div>
          <Button icon={<IconPlus />}>Tambah Trademark</Button>
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
        <Pagination total={80} currentPage={pagination.page} className={styles.pagination}></Pagination>
      </div>
    </div>
  );
}
