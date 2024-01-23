import { Button, Form, Modal, Spin, Typography } from '@douyinfe/semi-ui';
import { useRef, useState } from 'react';
import styles from './index.module.scss';
import { isNullish } from 'src/utils/nullish';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';

const { Title } = Typography;

type TProps = {
  values?: Record<string, unknown>;
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function EditSupplierForm(props: TProps) {
  const { values, isVisible, onCancel } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formApiRef = useRef<FormApi>();

  function handleEditSupplier() {
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
      className={styles.editSupplierModal}
      visible={isVisible}
      footer={
        <div className={styles.formBtnContainer}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            Batal
          </Button>
          <Button theme="solid" className={styles.submitBtn} onClick={handleEditSupplier}>
            {isSubmitting ? <Spin /> : 'Konfirmasi'}
          </Button>
        </div>
      }
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Edit Supplier</Title>}
    >
      <Form
        className={styles.supplierForm}
        onSubmit={handleEditSupplier}
        getFormApi={(formApi: FormApi) => (formApiRef.current = formApi)}
      >
        <Form.Input
          rules={[{ required: true, message: 'name supplier harus diisi' }]}
          field="supplierName"
          label="Nama Supplier"
          placeholder="Masukkan nama supplier"
          initValue={values?.supplierName}
        />
        <Form.Input
          rules={[{ required: true, message: 'no akun bank harus diisi' }]}
          field="bankAccountNumber"
          label="No Akun Bank"
          placeholder="Masukkan no akun bank"
          initValue={values?.bankAccountNumber}
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
      </Form>
    </Modal>
  );
}
