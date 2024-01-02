import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { useState } from 'react';
import { TTrademarkForm } from 'src/types/master/trademark/form';

const { Title } = Typography;

type TProps = {
  values: TTrademarkForm;
  isVisble: boolean;
  onCancel: () => void;
  handleOnSubmitSuccess?: () => void;
};

export default function EditTrademarkForm(props: TProps) {
  const { values, isVisble, onCancel } = props;
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
      className={styles.editTrademarkModal}
      visible={isVisble}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Tambah Trademark</Title>}
    >
      <Form className={styles.trademarkForm} onSubmit={handleAddTrademark}>
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
          initValue={values.trademark}
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
