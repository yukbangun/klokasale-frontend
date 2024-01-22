import { Button, Form, Modal, Spin, Toast, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import styles from './index.module.scss';
import { ShopCreateShopReq, ShopsApi } from 'src/services';
import { axiosInstance } from 'src/constants/axios';
import { TError } from 'src/types/error';

const { Title } = Typography;

type TProps = {
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function AddShopForm(props: TProps) {
  const { isVisible, onCancel, onSubmitSuccess } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleAddShop(values: Omit<ShopCreateShopReq, 'shopGroupId'>) {
    try {
      setIsSubmitting(true);
      const shopApi = new ShopsApi(undefined, undefined, axiosInstance);
      await shopApi.createShop({ ...values, shopGroupId: 1 });
      Toast.success('Shop berhasil ditambah');
      onCancel();
      onSubmitSuccess?.();
    } catch (e) {
      const { response } = e as TError;
      const { data } = response || {};
      const { error } = data || {};
      const { message } = error || {};
      Toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      className={styles.addShopModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Tambah Toko</Title>}
    >
      {/* TODO: show shop group id */}
      <Form className={styles.shopForm} onSubmit={handleAddShop}>
        <Form.Input
          rules={[{ required: true, message: 'nama harus diisi' }]}
          field="name"
          label="Nama"
          placeholder="Masukkan nama"
        />
        <Form.Input field="address" label="Alamat" placeholder="Masukkan alamat" />
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
