import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { useState } from 'react';

const { Title } = Typography;

type TProps = {
  values?: Record<string, unknown>;
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function EditTrademarkForm(props: TProps) {
  const { values, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEditTrademark(values: unknown) {
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
      className={styles.editTrademarkModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Edit Trademark</Title>}
    >
      <Form className={styles.trademarkForm} onSubmit={handleEditTrademark}>
        <Form.Input
          rules={[{ required: true, message: 'kode trademark harus diisi' }]}
          field="trademark_code"
          label="Kode Trademark"
          placeholder="Masukkan kode trademark"
          initValue={values?.trademark_code}
        />
        <Form.Input
          rules={[{ required: true, message: 'trademark harus diisi' }]}
          field="trademark"
          label="Trademark"
          placeholder="Masukkan trademark"
          initValue={values?.trademark}
        />
        <div className={styles.formBtnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Batal
          </Button>
          <Button theme="solid" className={styles.submitBtn} htmlType="submit">
            {isSubmitting ? <Spin /> : 'Konfirmasi'}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
