import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';
import { useRef, useState } from 'react';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';

const { Title } = Typography;

type TProps = {
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function AddUserForm(props: TProps) {
  const { isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formApiRef = useRef<FormApi>();

  // function handleAddUser(values: Record<string, unknown>) {
  //   try {
  //     // TODO: handle submit user
  //     setIsSubmitting(true);
  //     const hasPhoneSuffix = !isNullish(values?.phoneSuffix);
  //     if (hasPhoneSuffix) {
  //       values.phoneNumber = `${values?.phonePrefix}${values?.phoneSuffix}`;
  //     }
  //   } catch (e) {
  //     // TODO: show error toast
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // }

  function handleAddUser() {
    console.log('hahaha ', formApiRef?.current?.getValues());
    formApiRef.current
      ?.validate()
      .then(async formValues => {
        try {
          // TODO: handle submit user
          setIsSubmitting(true);
          const hasPhoneSuffix = !isNullish(formValues?.phoneSuffix);
          if (hasPhoneSuffix) {
            formValues.phoneNumber = `${formValues?.phonePrefix}${formValues?.phoneSuffix}`;
          }
        } catch (e) {
          // TODO: show error toast
        } finally {
          setIsSubmitting(false);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  function handleValidateConfirmPassword(val: string, values: Record<string, any>) {
    if (val !== values?.password) {
      return 'konfirmasi password berbeda dengan password';
    }
    return '';
  }

  function handleValidatePassword(val: string, values: Record<string, any>) {
    const isConfirmPasswordTouched = formApiRef.current?.getTouched('confirmPassword');
    if (isConfirmPasswordTouched && val !== values?.confirmPassword) {
      formApiRef.current?.setError('confirmPassword', 'konfirmasi password berbeda dengan password');
    }
    return '';
  }

  return (
    <Modal
      className={styles.addUserModal}
      visible={isVisible}
      footer={
        <div className={styles.formBtnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Batal
          </Button>
          <Button theme="solid" className={styles.submitBtn} onClick={handleAddUser}>
            {isSubmitting ? <Spin /> : 'Konfirmasi'}
          </Button>
        </div>
      }
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Tambah User</Title>}
      size="medium"
    >
      <Form
        className={styles.userForm}
        onSubmit={handleAddUser}
        getFormApi={(formApi: FormApi) => (formApiRef.current = formApi)}
      >
        <Form.Input
          rules={[{ required: true, message: 'username harus diisi' }]}
          field="username"
          label="Username"
          placeholder="Masukkan username"
        />
        <Form.Input
          rules={[{ required: true, message: 'nama harus diisi' }]}
          field="name"
          label="Nama"
          placeholder="Masukkan nama"
        />
        <Form.Input
          rules={[{ required: true, message: 'password harus diisi' }]}
          field="password"
          label="Password"
          placeholder="Masukkan password"
          type="password"
          validate={handleValidatePassword}
        />
        <Form.Input
          rules={[{ required: true, message: 'mohon konfirmasi password' }]}
          validate={handleValidateConfirmPassword}
          field="confirmPassword"
          label="Konfirmasi Password"
          placeholder="Konfirmasi password"
          type="password"
        />
        <Form.InputGroup label={{ text: <span>No Telp</span> }} className={styles.phoneNumberInputGroup}>
          <Form.Select field="phonePrefix" initValue="+62" disabled>
            <Form.Select.Option value="+62">+62</Form.Select.Option>
          </Form.Select>
          <Form.Input field="phoneNumberSuffix" placeholder="Masukkan no telefon" />
        </Form.InputGroup>
        <Form.Input field="address" label="Alamat" placeholder="Masukkan alamat" />
        {/* <div className={styles.formBtnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Batal
          </Button>
          <Button theme="solid" className={styles.submitBtn} htmlType="submit">
            {isSubmitting ? <Spin /> : 'Konfirmasi'}
          </Button>
        </div> */}
      </Form>
    </Modal>
  );
}
