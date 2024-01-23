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

export default function DeleteSupplierModal(props: TProps) {
  const { valueList, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shouldDisableDeleteBtn = isNullish(valueList) || valueList?.length === 0;

  function handleDeleteSupplier(values: unknown) {
    try {
      // TODO: handle submit supplier
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

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
  ];

  return (
    <Modal
      className={styles.deleteSupplierModal}
      visible={isVisible}
      footer={
        <div className={styles.btnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Batal
          </Button>
          <Button
            theme="solid"
            className={styles.submitBtn}
            onClick={handleDeleteSupplier}
            disabled={shouldDisableDeleteBtn}
          >
            {isSubmitting ? <Spin /> : 'Hapus'}
          </Button>
        </div>
      }
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Hapus Supplier</Title>}
      size="medium"
    >
      <Table
        className={styles.deleteSupplierTable}
        columns={columns}
        pagination={{ pageSize: 10, formatPageText: false }}
        dataSource={valueList}
        empty={
          <Empty
            image={<IllustrationNoContent className={styles.noDataDisplay} />}
            description={'Tidak ada supplier'}
          />
        }
      />
    </Modal>
  );
}
