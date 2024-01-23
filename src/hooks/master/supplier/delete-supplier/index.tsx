import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import DeleteSupplierModal from 'src/components/master/supplier/delete-supplier-modal';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  handleOnConfirm?: () => void;
};

export default function useDeleteSupplier(props: TProps) {
  const { handleOnConfirm } = props;
  const [supplierValueList, setSupplierValueList] = useState<Record<string, unknown>[]>();
  const [isDeleteSupplierFormVisible, setIsDeleteSupplierFormVisible] = useState(false);

  function handleShowDeleteSupplierModal(supplierValueList: Record<string, unknown>[]) {
    if (!isNullish(supplierValueList) && supplierValueList?.length > 0) {
      setSupplierValueList(supplierValueList);
      setIsDeleteSupplierFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseDeleteSupplierModal() {
    setSupplierValueList(undefined);
    setIsDeleteSupplierFormVisible(false);
  }

  const deleteSupplierModal = (
    <DeleteSupplierModal
      valueList={supplierValueList}
      isVisible={isDeleteSupplierFormVisible}
      onCancel={handleCloseDeleteSupplierModal}
      onConfirm={handleOnConfirm}
    />
  );

  return {
    deleteSupplierModal,
    handleShowDeleteSupplierModal,
    handleCloseDeleteSupplierModal,
  };
}
