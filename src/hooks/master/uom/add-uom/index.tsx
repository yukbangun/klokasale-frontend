import { useState } from 'react';
import AddUomForm from 'src/components/master/uom/add-uom-form';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useAddUom(props: TProps) {
  const { onSubmitSuccess } = props;
  const [isAddUomFormVisible, setIsAddUomFormVisible] = useState(false);

  function handleShowAddUomForm() {
    setIsAddUomFormVisible(true);
  }

  function handleCloseAddUomForm() {
    setIsAddUomFormVisible(false);
  }

  const addUomForm = (
    <AddUomForm isVisible={isAddUomFormVisible} onCancel={handleCloseAddUomForm} onSubmitSuccess={onSubmitSuccess} />
  );

  return {
    addUomForm,
    handleShowAddUomForm,
    handleCloseAddUomForm,
  };
}
