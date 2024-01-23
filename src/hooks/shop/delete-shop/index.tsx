import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import DeleteShopModal from 'src/components/shop/delete-shop-modal';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useDeleteShop(props: TProps) {
  const { onSubmitSuccess } = props;
  const [shopValueList, setShopValueList] = useState<Record<string, unknown>[]>();
  const [isDeleteShopFormVisible, setIsDeleteShopFormVisible] = useState(false);

  function handleShowDeleteShopModal(shopValueList: Record<string, unknown>[]) {
    if (!isNullish(shopValueList) && shopValueList?.length > 0) {
      setShopValueList(shopValueList);
      setIsDeleteShopFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseDeleteShopModal() {
    setShopValueList(undefined);
    setIsDeleteShopFormVisible(false);
  }

  const deleteShopModal = (
    <DeleteShopModal
      valueList={shopValueList}
      isVisible={isDeleteShopFormVisible}
      onCancel={handleCloseDeleteShopModal}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    deleteShopModal,
    handleShowDeleteShopModal,
    handleCloseDeleteShopModal,
  };
}
