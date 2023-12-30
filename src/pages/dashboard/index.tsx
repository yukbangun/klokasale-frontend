import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavigationBar from 'src/components/navigation-bar';
import { ELocalStorageKey } from 'src/constants/local-storage';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';

export default function DashboardPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const bearerToken = localStorage.getItem(ELocalStorageKey.BearerToken);
    if (isNullish(bearerToken)) {
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
