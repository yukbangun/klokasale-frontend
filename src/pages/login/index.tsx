import { Button, Form, Spin, Typography } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalStorageKey } from 'src/constants/local-storage';
import { UsersApi } from 'src/services';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';
const { Title } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogin(values: { username: string; password: string }) {
    try {
      setIsSubmitting(true);
      const { username, password } = values;
      const userApi = new UsersApi();
      await userApi.v1UsersLoginPost({ username, password });
      navigate('/');
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const bearerToken = localStorage.getItem(LocalStorageKey.BearerToken);
    if (!isNullish(bearerToken)) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.loginPage}>
      <Title heading={1}>Login</Title>
      <Form className={styles.loginForm} onSubmit={handleLogin}>
        <Form.Input
          rules={[{ required: true, message: 'username harus diisi' }]}
          field="username"
          label="Username"
          placeholder="Masukkan username"
        />
        <Form.Input
          rules={[{ required: true, message: 'password harus diisi' }]}
          field="password"
          label="Password"
          placeholder="Masukkan password"
          mode="password"
        />
        <Button className={styles.submitBtn} htmlType="submit">
          {isSubmitting ? <Spin /> : 'Submit'}
        </Button>
      </Form>
    </div>
  );
}
