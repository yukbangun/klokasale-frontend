import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import EditShopForm from 'src/components/shop/edit-shop-form';
import { ShopShopResp } from 'src/services';
import { isNullish } from 'src/utils/nullish';
type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useEditShop(props: TProps) {
  const { onSubmitSuccess } = props;
  const [shopValues, setShopValues] = useState<Partial<ShopShopResp>>();
  const [isEditShopFormVisible, setIsEditShopFormVisible] = useState(false);

  function handleShowEditShopForm(shopValues: Partial<ShopShopResp>) {
    if (!isNullish(shopValues)) {
      setShopValues(shopValues);
      setIsEditShopFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseEditShopForm() {
    setShopValues(undefined);
    setIsEditShopFormVisible(false);
  }

  const editShopForm = (
    <EditShopForm
      values={shopValues}
      isVisible={isEditShopFormVisible}
      onCancel={handleCloseEditShopForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    editShopForm,
    handleShowEditShopForm,
    handleCloseEditShopForm,
  };
}
