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

export default function DeleteUomModal(props: TProps) {
  const { valueList, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldDisableDeleteBtn = isNullish(valueList) || valueList?.length === 0;

  function handleDeleteUom(values: unknown) {
    try {
      // TODO: handle submit uom
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  const columns: ColumnProps[] = [
    {
      title: 'Satuan',
      dataIndex: 'uomName',
      width: 150,
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
  ];

  return (
    <Modal
      className={styles.deleteUomModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Hapus Uom</Title>}
      size="medium"
    >
      <Table
        className={styles.deleteUomTable}
        columns={columns}
        pagination={{ pageSize: 10, formatPageText: false }}
        dataSource={valueList}
        empty={
          <Empty image={<IllustrationNoContent className={styles.noDataDisplay} />} description={'Tidak ada satuan'} />
        }
      />
      <div className={styles.btnContainer}>
        <Button className={styles.cancelBtn} onClick={onCancel}>
          Batal
        </Button>
        <Button theme="solid" className={styles.submitBtn} onClick={handleDeleteUom} disabled={shouldDisableDeleteBtn}>
          {isSubmitting ? <Spin /> : 'Hapus'}
        </Button>
      </div>
    </Modal>
  );
}
