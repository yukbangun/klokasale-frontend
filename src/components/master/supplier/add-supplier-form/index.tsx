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

export default function AddSupplierForm(props: TProps) {
  const { isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formApiRef = useRef<FormApi>();

  function handleAddSupplier() {
    formApiRef.current
      ?.validate()
      .then(async formValues => {
        try {
          // TODO: handle submit supplier
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

  return (
    <Modal
      className={styles.addSupplierModal}
      visible={isVisible}
      footer={
        <div className={styles.formBtnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Batal
          </Button>
          <Button theme="solid" className={styles.submitBtn} onClick={handleAddSupplier}>
            {isSubmitting ? <Spin /> : 'Konfirmasi'}
          </Button>
        </div>
      }
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Tambah Supplier</Title>}
    >
      <Form
        className={styles.supplierForm}
        onSubmit={handleAddSupplier}
        getFormApi={(formApi: FormApi) => (formApiRef.current = formApi)}
      >
        <Form.Input
          rules={[{ required: true, message: 'nama supplier harus diisi' }]}
          field="supplierName"
          label="Nama Supplier"
          placeholder="Masukkan nama supplier"
        />
        <Form.Input
          rules={[{ required: true, message: 'no akun bank harus diisi' }]}
          field="bankAccountNumber"
          label="No Akun Bank"
          placeholder="Masukkan no akun bank"
        />
        <Form.InputGroup label={{ text: <span>No Telp</span> }} className={styles.phoneNumberInputGroup}>
          <Form.Select field="phonePrefix" initValue="+62" disabled>
            <Form.Select.Option value="+62">+62</Form.Select.Option>
          </Form.Select>
          <Form.Input field="phoneNumberSuffix" placeholder="Masukkan no telefon" />
        </Form.InputGroup>
        <Form.Input field="address" label="Alamat" placeholder="Masukkan alamat" />
      </Form>
    </Modal>
  );
}
