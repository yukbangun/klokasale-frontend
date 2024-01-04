import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import styles from './index.module.scss';

const { Title } = Typography;

type TProps = {
  values?: Record<string, unknown>;
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function EditShopForm(props: TProps) {
  const { values, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEditShop(values: Record<string, unknown>) {
    try {
      // TODO: handle submit shop
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      className={styles.editShopModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Edit Toko</Title>}
    >
      {/* TODO: show shop group id */}
      <Form className={styles.shopForm} onSubmit={handleEditShop}>
        <Form.Input
          rules={[{ required: true, message: 'nama harus diisi' }]}
          field="name"
          label="Nama"
          placeholder="Masukkan nama"
          initValue={values?.name}
        />
        <Form.Input field="address" label="Alamat" placeholder="Masukkan alamat" initValue={values?.address} />
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
