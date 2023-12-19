import { Button, Form, Spin } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleLogin(values: unknown) {
    try {
      // TODO: handle login
      setIsSubmitting(true);
      navigate('/');
    } catch (e) {
      // TODO: show error toast
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className={styles.loginPage}>
      <Form className={styles.loginForm} onSubmit={handleLogin}>
        <Form.Input field="username" label="Username" placeholder="Enter your username" />
        <Form.Input field="password" label="Password" placeholder="Enter your password" mode="password" />
        <Button className={styles.submitBtn} htmlType="submit">
          {isSubmitting ? <Spin /> : 'Submit'}
        </Button>
      </Form>
    </div>
  );
}
