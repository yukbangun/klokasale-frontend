import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import DeleteUserModal from 'src/components/user/delete-user';
import { isNullish } from 'src/utils/nullish';

type TProps = {
  handleOnConfirm?: () => void;
};

export default function useDeleteUser(props: TProps) {
  const { handleOnConfirm } = props;
  const [userValueList, setUserValueList] = useState<Record<string, unknown>[]>();
  const [isDeleteUserFormVisible, setIsDeleteUserFormVisible] = useState(false);

  function handleShowDeleteUserModal(userValueList: Record<string, unknown>[]) {
    if (!isNullish(userValueList) && userValueList?.length > 0) {
      setUserValueList(userValueList);
      setIsDeleteUserFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseDeleteUserModal() {
    setUserValueList(undefined);
    setIsDeleteUserFormVisible(false);
  }

  const deleteUserModal = (
    <DeleteUserModal
      valueList={userValueList}
      isVisible={isDeleteUserFormVisible}
      onCancel={handleCloseDeleteUserModal}
      onConfirm={handleOnConfirm}
    />
  );

  return {
    deleteUserModal,
    handleShowDeleteUserModal,
    handleCloseDeleteUserModal,
  };
}
