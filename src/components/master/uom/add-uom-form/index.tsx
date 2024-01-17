import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { useState } from 'react';

const { Title } = Typography;

type TProps = {
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function AddUomForm(props: TProps) {
  const { isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleAddUom(values: unknown) {
    try {
      // TODO: handle submit uom
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      className={styles.addUomModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Tambah Uom</Title>}
    >
      <Form className={styles.uomForm} onSubmit={handleAddUom}>
        <Form.Input
          rules={[{ required: true, message: 'satuan harus diisi' }]}
          field="uomName"
          label="Satuan"
          placeholder="Masukkan satuan"
        />
        <Form.Input field="description" label="Deskripsi" placeholder="Masukkan deskripsi satuan" />
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
