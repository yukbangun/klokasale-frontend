import { useState } from 'react';
import AddTrademarkForm from 'src/components/master/trademark/add-trademark-form';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useAddTrademark(props: TProps) {
  const { onSubmitSuccess } = props;
  const [isAddTrademarkFormVisible, setIsAddTrademarkFormVisible] = useState(false);

  function handleShowAddTrademarkForm() {
    setIsAddTrademarkFormVisible(true);
  }

  function handleCloseAddTrademarkForm() {
    setIsAddTrademarkFormVisible(false);
  }

  const addTrademarkForm = (
    <AddTrademarkForm
      isVisible={isAddTrademarkFormVisible}
      onCancel={handleCloseAddTrademarkForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    addTrademarkForm,
    handleShowAddTrademarkForm,
    handleCloseAddTrademarkForm,
  };
}
