import { useState } from 'react';
import AddUserForm from 'src/components/user/add-user-form';

type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useAddUser(props: TProps) {
  const { onSubmitSuccess } = props;
  const [isAddUserFormVisible, setIsAddUserFormVisible] = useState(false);

  function handleShowAddUserForm() {
    setIsAddUserFormVisible(true);
  }

  function handleCloseAddUserForm() {
    setIsAddUserFormVisible(false);
  }

  const addUserForm = (
    <AddUserForm isVisible={isAddUserFormVisible} onCancel={handleCloseAddUserForm} onSubmitSuccess={onSubmitSuccess} />
  );

  return {
    addUserForm,
    handleShowAddUserForm,
    handleCloseAddUserForm,
  };
}
