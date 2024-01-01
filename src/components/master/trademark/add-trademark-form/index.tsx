import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { useState } from 'react';

const { Title } = Typography;

type TProps = {
  isVisble: boolean;
  onCancel: () => void;
  handleOnSubmitSuccess?: () => void;
};

export default function AddTrademarkForm(props: TProps) {
  const { isVisble, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <Modal
      className={styles.addTrademarkModal}
      visible={isVisble}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Tambah Trademark</Title>}
    >
      <Form className={styles.tradeMarkForm} onSubmit={handleAddTrademark}>
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
        <div className={styles.formBtnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </Button>
          <Button theme="solid" className={styles.submitBtn} htmlType="submit">
            {isSubmitting ? <Spin /> : 'Submit'}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
