import { useState } from 'react';
import AddShopForm from 'src/components/shop/add-shop-form';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useAddShop(props: TProps) {
  const { onSubmitSuccess } = props;
  const [isAddShopFormVisible, setIsAddShopFormVisible] = useState(false);

  function handleShowAddShopForm() {
    setIsAddShopFormVisible(true);
  }

  function handleCloseAddShopForm() {
    setIsAddShopFormVisible(false);
  }

  const addShopForm = (
    <AddShopForm isVisible={isAddShopFormVisible} onCancel={handleCloseAddShopForm} onSubmitSuccess={onSubmitSuccess} />
  );

  return {
    addShopForm,
    handleShowAddShopForm,
    handleCloseAddShopForm,
  };
}
