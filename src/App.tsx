import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashboardPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
