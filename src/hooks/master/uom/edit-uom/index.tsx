import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import EditUomForm from 'src/components/master/uom/edit-uom-form';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useEditUom(props: TProps) {
  const { onSubmitSuccess } = props;
  const [uomValues, setUomValues] = useState<Record<string, unknown>>();
  const [isEditUomFormVisible, setIsEditUomFormVisible] = useState(false);

  function handleShowEditUomForm(uomValues: Record<string, unknown>) {
    if (!isNullish(uomValues)) {
      setUomValues(uomValues);
      setIsEditUomFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseEditUomForm() {
    setUomValues(undefined);
    setIsEditUomFormVisible(false);
  }

  const editUomForm = (
    <EditUomForm
      values={uomValues}
      isVisible={isEditUomFormVisible}
      onCancel={handleCloseEditUomForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    editUomForm,
    handleShowEditUomForm,
    handleCloseEditUomForm,
  };
}
