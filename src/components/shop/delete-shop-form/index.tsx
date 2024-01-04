import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import Table, { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useState } from 'react';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';

const { Text, Title } = Typography;

type TProps = {
  valueList?: Record<string, unknown>[];
  isVisible: boolean;
  onCancel: () => void;
  onConfirm?: () => void;
};

export default function DeleteShopModal(props: TProps) {
  const { valueList, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shouldDisableDeleteBtn = isNullish(valueList) || valueList?.length === 0;

  function handleDeleteShop(values: unknown) {
    try {
      // TODO: handle submit shop
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

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
  ];

  return (
    <Modal
      className={styles.deleteShopModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Hapus Shop</Title>}
      size="medium"
    >
      <Table
        className={styles.deleteShopTable}
        columns={columns}
        pagination={{ pageSize: 10, formatPageText: false }}
        dataSource={valueList}
        empty={
          <Empty image={<IllustrationNoContent className={styles.noDataDisplay} />} description={'Tidak ada shop'} />
        }
      />
      <div className={styles.btnContainer}>
        <Button className={styles.cancelBtn} onClick={onCancel}>
          Batal
        </Button>
        <Button theme="solid" className={styles.submitBtn} onClick={handleDeleteShop} disabled={shouldDisableDeleteBtn}>
          {isSubmitting ? <Spin /> : 'Hapus'}
        </Button>
      </div>
    </Modal>
  );
}
