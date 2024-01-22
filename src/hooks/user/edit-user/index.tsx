import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import EditUserForm from 'src/components/user/edit-user-form';
import { isNullish } from 'src/utils/nullish';
type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useEditUser(props: TProps) {
  const { onSubmitSuccess } = props;
  const [userValues, setUserValues] = useState<Record<string, unknown>>();
  const [isEditUserFormVisible, setIsEditUserFormVisible] = useState(false);

  function handleShowEditUserForm(userValues: Record<string, unknown>) {
    if (!isNullish(userValues)) {
      setUserValues(userValues);
      setIsEditUserFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseEditUserForm() {
    setUserValues(undefined);
    setIsEditUserFormVisible(false);
  }

  const editUserForm = (
    <EditUserForm
      values={userValues}
      isVisible={isEditUserFormVisible}
      onCancel={handleCloseEditUserForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    editUserForm,
    handleShowEditUserForm,
    handleCloseEditUserForm,
  };
}
