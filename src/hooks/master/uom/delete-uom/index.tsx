import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import DeleteUomModal from 'src/components/master/uom/delete-uom-modal';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  handleOnConfirm?: () => void;
};

export default function useDeleteUom(props: TProps) {
  const { handleOnConfirm } = props;
  const [uomValueList, setUomValueList] = useState<Record<string, unknown>[]>();
  const [isDeleteUomFormVisible, setIsDeleteUomFormVisible] = useState(false);

  function handleShowDeleteUomModal(uomValueList: Record<string, unknown>[]) {
    if (!isNullish(uomValueList) && uomValueList?.length > 0) {
      setUomValueList(uomValueList);
      setIsDeleteUomFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseDeleteUomModal() {
    setUomValueList(undefined);
    setIsDeleteUomFormVisible(false);
  }

  const deleteUomModal = (
    <DeleteUomModal
      valueList={uomValueList}
      isVisible={isDeleteUomFormVisible}
      onCancel={handleCloseDeleteUomModal}
      onConfirm={handleOnConfirm}
    />
  );

  return {
    deleteUomModal,
    handleShowDeleteUomModal,
    handleCloseDeleteUomModal,
  };
}
