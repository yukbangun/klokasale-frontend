import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Modal, Spin, Toast, Typography } from '@douyinfe/semi-ui';
import Table, { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useState } from 'react';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';
import { ShopDeleteShopReq, ShopShopResp, ShopsApi } from 'src/services';
import { axiosInstance } from 'src/constants/axios';
import { TError } from 'src/types/error';

const { Text, Title } = Typography;

type TProps = {
  valueList?: Partial<ShopShopResp>[];
  isVisible: boolean;
  onCancel: () => void;
  onSubmitSuccess?: () => void;
};

export default function DeleteShopModal(props: TProps) {
  const { valueList, isVisible, onCancel, onSubmitSuccess } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ids = valueList?.map(value => value?.id)?.filter(id => !isNullish(id)) as number[];
  const hasIds = Array.isArray(ids) && ids?.length > 0;

  const shouldDisableDeleteBtn = isNullish(valueList) || valueList?.length === 0;

  async function handleDeleteShop() {
    if (!hasIds) {
      onCancel();
      Toast.error('Terjadi kesalahan, shop id tidak ditemukan');
      return;
    }
    try {
      setIsSubmitting(true);
      const shopApi = new ShopsApi(undefined, undefined, axiosInstance);
      await shopApi.deleteShop(ids?.[0], { shopGroupId: 1 });
      Toast.success('Shop berhasil dihapus');
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

  const columns: ColumnProps[] = [
    {
      title: 'Nama',
      dataIndex: 'name',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
  ];

  return (
    <Modal
      className={styles.deleteShopModal}
      visible={isVisible}
      footer={undefined}
      closeIcon={undefined}
      onCancel={onCancel}
      header={<Title heading={4}>Hapus Shop</Title>}
      size="medium"
    >
      <Table
        className={styles.deleteShopTable}
        columns={columns}
        pagination={{ pageSize: 10, formatPageText: false }}
        dataSource={valueList}
        empty={
          <Empty image={<IllustrationNoContent className={styles.noDataDisplay} />} description={'Tidak ada shop'} />
        }
      />
      <div className={styles.btnContainer}>
        <Button className={styles.cancelBtn} onClick={onCancel}>
          Batal
        </Button>
        <Button theme="solid" className={styles.submitBtn} onClick={handleDeleteShop} disabled={shouldDisableDeleteBtn}>
          {isSubmitting ? <Spin /> : 'Hapus'}
        </Button>
      </div>
    </Modal>
  );
}
