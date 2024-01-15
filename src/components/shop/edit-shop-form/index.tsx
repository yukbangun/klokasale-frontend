import { Button, Form, Modal, Spin, Toast, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import styles from './index.module.scss';
import { ShopShopResp, ShopUpdateShopReq, ShopsApi } from 'src/services';
import { axiosInstance } from 'src/constants/axios';
import { TError } from 'src/types/error';
import { isNullish } from 'src/utils/nullish';

const { Title } = Typography;

type TProps = {
  values?: Partial<ShopShopResp>;
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function EditShopForm(props: TProps) {
  const { values, isVisible, onCancel, onSubmitSuccess } = props;
  const { id } = values || {};
  const hasId = !isNullish(id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleEditShop(formValues: Omit<ShopUpdateShopReq, 'shopGroupId'>) {
    if (!hasId) {
      onCancel();
      Toast.error('Terjadi kesalahan, shop id tidak ditemukan');
      return;
    }
    try {
      setIsSubmitting(true);
      const shopApi = new ShopsApi(undefined, undefined, axiosInstance);
      await shopApi.updateShop(id, { ...formValues, shopGroupId: 1 });
      Toast.success('Shop berhasil diubah');
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
