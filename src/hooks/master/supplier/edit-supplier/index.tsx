import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import EditSupplierForm from 'src/components/master/supplier/edit-supplier-form';
import { isNullish } from 'src/utils/nullish';
type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useEditSupplier(props: TProps) {
  const { onSubmitSuccess } = props;
  const [supplierValues, setSupplierValues] = useState<Record<string, unknown>>();
  const [isEditSupplierFormVisible, setIsEditSupplierFormVisible] = useState(false);

  function handleShowEditSupplierForm(supplierValues: Record<string, unknown>) {
    if (!isNullish(supplierValues)) {
      setSupplierValues(supplierValues);
      setIsEditSupplierFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseEditSupplierForm() {
    setSupplierValues(undefined);
    setIsEditSupplierFormVisible(false);
  }

  const editSupplierForm = (
    <EditSupplierForm
      values={supplierValues}
      isVisible={isEditSupplierFormVisible}
      onCancel={handleCloseEditSupplierForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    editSupplierForm,
    handleShowEditSupplierForm,
    handleCloseEditSupplierForm,
  };
}
