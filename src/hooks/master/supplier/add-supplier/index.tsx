import { useState } from 'react';
import AddSupplierForm from 'src/components/master/supplier/add-supplier-form';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useAddSupplier(props: TProps) {
  const { onSubmitSuccess } = props;
  const [isAddSupplierFormVisible, setIsAddSupplierFormVisible] = useState(false);

  function handleShowAddSupplierForm() {
    setIsAddSupplierFormVisible(true);
  }

  function handleCloseAddSupplierForm() {
    setIsAddSupplierFormVisible(false);
  }

  const addSupplierForm = (
    <AddSupplierForm
      isVisible={isAddSupplierFormVisible}
      onCancel={handleCloseAddSupplierForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    addSupplierForm,
    handleShowAddSupplierForm,
    handleCloseAddSupplierForm,
  };
}
