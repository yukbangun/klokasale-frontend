import { useState } from 'react';
import EditTrademarkForm from 'src/components/master/trademark/edit-trademark-form';
import { TTrademarkForm } from 'src/types/master/trademark/form';

type TProps = {
  values: TTrademarkForm;
  handleOnSubmitSuccess?: () => void;
};

export default function useEditTrademark(props: TProps) {
  const { values, handleOnSubmitSuccess } = props;
  const [isEditTrademarkFormVisible, setIsEditTrademarkFormVisible] = useState(false);

  function handleShowEditTrademarkForm() {
    setIsEditTrademarkFormVisible(true);
  }

  function handleCloseEditTrademarkForm() {
    setIsEditTrademarkFormVisible(false);
  }

  const editTrademarkForm = (
    <EditTrademarkForm
      values={values}
      isVisble={isEditTrademarkFormVisible}
      onCancel={handleCloseEditTrademarkForm}
      handleOnSubmitSuccess={handleOnSubmitSuccess}
    />
  );

  return {
    editTrademarkForm,
    handleShowEditTrademarkForm,
    handleCloseEditTrademarkForm,
  };
}
