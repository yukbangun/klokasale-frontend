import { Button, Form } from '@douyinfe/semi-ui';
import styles from './index.module.scss';

export default function LoginPage() {
  function handleLogin(values: unknown) {
    console.log('hahaha ', values);
  }
  return (
    <div className={styles.loginPage}>
      <Form className={styles.loginForm} onSubmit={handleLogin}>
        <Form.Input field="username" label="Username" placeholder="Enter your username" />
        <Form.Input field="password" label="Password" placeholder="Enter your password" mode="password" />
        <Button className={styles.submitBtn} htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
