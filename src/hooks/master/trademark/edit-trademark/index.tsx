import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import EditTrademarkForm from 'src/components/master/trademark/edit-trademark-form';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useEditTrademark(props: TProps) {
  const { onSubmitSuccess } = props;
  const [trademarkValues, setTrademarkValues] = useState<Record<string, unknown>>();
  const [isEditTrademarkFormVisible, setIsEditTrademarkFormVisible] = useState(false);

  function handleShowEditTrademarkForm(trademarkValues: Record<string, unknown>) {
    if (!isNullish(trademarkValues)) {
      setTrademarkValues(trademarkValues);
      setIsEditTrademarkFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseEditTrademarkForm() {
    setTrademarkValues(undefined);
    setIsEditTrademarkFormVisible(false);
  }

  const editTrademarkForm = (
    <EditTrademarkForm
      values={trademarkValues}
      isVisible={isEditTrademarkFormVisible}
      onCancel={handleCloseEditTrademarkForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    editTrademarkForm,
    handleShowEditTrademarkForm,
    handleCloseEditTrademarkForm,
  };
}
