import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router-dom';
import NavigationBar from 'src/components/navigation-bar';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  useEffect(() => {
    if (isNullish(cookies?.token)) {
      navigate('/login');
    }
  }, []);
  return (
    <div className={styles.dashboardPage}>
      <div className={styles.navigationBarContainer}>
        <NavigationBar />
      </div>
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}
