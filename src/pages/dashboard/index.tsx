import { useEffect } from 'react';
import NavigationBar from 'src/components/navigation-bar';

export default function DashboardPage() {
  useEffect(() => {
    // TODO: check if user is logged in
  }, []);
  return (
    <div>
      <NavigationBar />
    </div>
  );
}
