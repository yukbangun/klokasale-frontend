import { Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import ResetUserPasswordForm from 'src/components/user/reset-user-password-form';
import { isNullish } from 'src/utils/nullish';
type TProps = {
  onSubmitSuccess?: () => void;
};

export default function useResetUserPassword(props: TProps) {
  const { onSubmitSuccess } = props;
  const [username, setUsername] = useState<string>();
  const [isResetUserPasswordFormVisible, setIsResetUserPasswordFormVisible] = useState(false);

  function handleShowResetUserPasswordForm(username: string) {
    if (!isNullish(username)) {
      setUsername(username);
      setIsResetUserPasswordFormVisible(true);
    } else {
      Toast.error('Terjadi kesalahan, mohon refresh halaman');
    }
  }

  function handleCloseResetUserPasswordForm() {
    setUsername(undefined);
    setIsResetUserPasswordFormVisible(false);
  }

  const resetUserPasswordForm = (
    <ResetUserPasswordForm
      username={username}
      isVisible={isResetUserPasswordFormVisible}
      onCancel={handleCloseResetUserPasswordForm}
      onSubmitSuccess={onSubmitSuccess}
    />
  );

  return {
    resetUserPasswordForm,
    handleShowResetUserPasswordForm,
    handleCloseResetUserPasswordForm,
  };
}
