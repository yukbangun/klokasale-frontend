import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import styles from './index.module.scss';
import { isNullish } from 'src/utils/nullish';

const { Title } = Typography;

type TProps = {
  values?: Record<string, unknown>;
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function EditUserForm(props: TProps) {
  const { values, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEditUser(values: Record<string, unknown>) {
    try {
      // TODO: handle submit user
      setIsSubmitting(true);
      const hasPhoneSuffix = !isNullish(values?.phoneSuffix);
      if (hasPhoneSuffix) {
        values.phoneNumber = `${values?.phonePrefix}${values?.phoneSuffix}`;
      }
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      className={styles.editUserModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Edit User</Title>}
    >
      <Form className={styles.userForm} onSubmit={handleEditUser}>
        <Form.Input
          rules={[{ required: true, message: 'username harus diisi' }]}
          field="username"
          label="Username"
          placeholder="Masukkan username"
          initValue={values?.username}
        />
        <Form.Input
          rules={[{ required: true, message: 'nama harus diisi' }]}
          field="name"
          label="Nama"
          placeholder="Masukkan nama"
          initValue={values?.name}
        />
        <Form.InputGroup label={{ text: <span>No Telp</span> }} className={styles.phoneNumberInputGroup}>
          <Form.Select field="phonePrefix" initValue="+62" disabled>
            <Form.Select.Option value="+62">+62</Form.Select.Option>
          </Form.Select>
          <Form.Input
            field="phoneNumberSuffix"
            placeholder="Masukkan no telefon"
            initValue={typeof values?.phoneNumber === 'string' ? values?.phoneNumber?.slice(3) : ''}
          />
        </Form.InputGroup>
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
