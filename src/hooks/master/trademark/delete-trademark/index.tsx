import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import DeleteTrademarkModal from 'src/components/master/trademark/delete-trademark-modal';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  handleOnConfirm?: () => void;
};

export default function useDeleteTrademark(props: TProps) {
  const { handleOnConfirm } = props;
  const [trademarkValueList, setTrademarkValueList] = useState<Record<string, unknown>[]>();
  const [isDeleteTrademarkFormVisible, setIsDeleteTrademarkFormVisible] = useState(false);

  function handleShowDeleteTrademarkModal(trademarkValueList: Record<string, unknown>[]) {
    if (!isNullish(trademarkValueList) && trademarkValueList?.length > 0) {
      setTrademarkValueList(trademarkValueList);
      setIsDeleteTrademarkFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseDeleteTrademarkModal() {
    setTrademarkValueList(undefined);
    setIsDeleteTrademarkFormVisible(false);
  }

  const deleteTrademarkModal = (
    <DeleteTrademarkModal
      valueList={trademarkValueList}
      isVisible={isDeleteTrademarkFormVisible}
      onCancel={handleCloseDeleteTrademarkModal}
      onConfirm={handleOnConfirm}
    />
  );

  return {
    deleteTrademarkModal,
    handleShowDeleteTrademarkModal,
    handleCloseDeleteTrademarkModal,
  };
}
