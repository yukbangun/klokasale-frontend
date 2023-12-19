import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashboardPage />,
      // children: [
      //   {
      //     path: "master",
      //     element: <MasterPage />,
      //   },
      //   {
      //     path: "pos",
      //     element: <PosPage />,
      //   },
      // ],
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
