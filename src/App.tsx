import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashboardPage />,
      children: [
        {
          index: true,
          element: <div>pos</div>,
        },
        {
          path: 'pos',
          element: <div>pos</div>,
        },
        {
          path: 'master',
          children: [
            {
              path: 'barang',
              element: <div>barang</div>,
            },
            {
              path: 'supplier',
              element: <div>supplier</div>,
            },
            {
              path: 'pelanggan',
              element: <div>pelanggan</div>,
            },
            {
              path: 'kas_dan_biaya',
              element: <div>kas_dan_biaya</div>,
            },
            {
              path: 'piutang',
              element: <div>piutang</div>,
            },
            {
              path: 'hutang',
              element: <div>hutang</div>,
            },
          ],
        },
      ],
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
