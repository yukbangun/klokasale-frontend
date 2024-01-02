import { Button, Empty, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { useState } from 'react';
import Table, { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { isNullish } from 'src/utils/nullish';

const { Text, Title } = Typography;

type TProps = {
  valueList?: Record<string, unknown>[];
  isVisible: boolean;
  onCancel: () => void;
  onConfirm?: () => void;
};

export default function DeleteTrademarkModal(props: TProps) {
  const { valueList, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shouldDisableDeleteBtn = isNullish(valueList) || valueList?.length === 0;

  function handleDeleteTrademark(values: unknown) {
    try {
      // TODO: handle submit trademark
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  const columns: ColumnProps[] = [
    {
      title: 'Kode Trademark',
      dataIndex: 'trademark_code',
      width: 150,
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
  ];

  return (
    <Modal
      className={styles.deleteTrademarkModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Hapus Trademark</Title>}
      size="medium"
    >
      <Table
        className={styles.deleteTrademarkTable}
        columns={columns}
        pagination={{ pageSize: 10, formatPageText: false }}
        dataSource={valueList}
        empty={
          <Empty
            image={<IllustrationNoContent className={styles.noDataDisplay} />}
            description={'Tidak ada trademark'}
          />
        }
      />
      <div className={styles.btnContainer}>
        <Button className={styles.cancelBtn} onClick={onCancel}>
          Batal
        </Button>
        <Button
          theme="solid"
          className={styles.submitBtn}
          onClick={handleDeleteTrademark}
          disabled={shouldDisableDeleteBtn}
        >
          {isSubmitting ? <Spin /> : 'Hapus'}
        </Button>
      </div>
    </Modal>
  );
}
