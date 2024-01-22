import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import styles from './index.module.scss';

const { Title } = Typography;

type TProps = {
  username?: string;
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function ResetUserPasswordForm(props: TProps) {
  const { username, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleResetUserPassword(values: Record<string, unknown>) {
    try {
      // TODO: handle submit user
      setIsSubmitting(true);
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleValidateConfirmPassword(val: any, values: Record<string, any>) {
    if (val !== values?.password) {
      return 'konfirmasi password berbeda dengan password';
    }
    return '';
  }

  return (
    <Modal
      className={styles.resetUserPasswordModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Edit User</Title>}
    >
      <Form className={styles.resetUserPasswordForm} onSubmit={handleResetUserPassword}>
        <Form.Input
          rules={[{ required: true, message: 'password harus diisi' }]}
          field="password"
          label="Password Baru"
          placeholder="Masukkan password baru"
          type="password"
        />
        <Form.Input
          rules={[{ required: true, message: 'mohon konfirmasi password' }]}
          validate={handleValidateConfirmPassword}
          field="confirmPassword"
          label="Konfirmasi Password"
          placeholder="Konfirmasi password"
          type="password"
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
