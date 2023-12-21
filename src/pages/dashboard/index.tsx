import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from 'src/components/navigation-bar';
import { LocalStorageKey } from 'src/constants/local-storage';
import { isNullish } from 'src/utils/nullish';
import styles from './index.module.scss';

export default function DashboardPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const bearerToken = localStorage.getItem(LocalStorageKey.BearerToken);
    if (isNullish(bearerToken)) {
      navigate('/login');
    }
  }, []);
  return (
    <div className={styles.dashboardPage}>
      <NavigationBar />
    </div>
  );
}
