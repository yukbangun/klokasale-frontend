import { Button, Form, Spin, Toast, Typography } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { UsersApi } from 'src/services';
import { TError } from 'src/types/error';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';
import { axiosInstance } from 'src/constants/axios';

const { Title } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cookies] = useCookies();

  async function handleLogin(values: { username: string; password: string }) {
    try {
      setIsSubmitting(true);
      const { username, password } = values;
      const userApi = new UsersApi(undefined, undefined, axiosInstance);
      await userApi.userLogin({ username, password });
      navigate('/');
    } catch (e) {
      const { response } = e as TError;
      const { data } = response || {};
      const { error } = data || {};
      const { message } = error || {};
      Toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (!isNullish(cookies?.token)) {
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
