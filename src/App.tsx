import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import MasterBarangPage from './pages/master/barang';
import MasterTrademarkPage from './pages/master/trademark';
import UserPage from './pages/user';
import ShopPage from './pages/shop';
import { LocaleProvider } from '@douyinfe/semi-ui';
import id_ID from '@douyinfe/semi-ui/lib/es/locale/source/id_ID';
import MasterUomPage from './pages/master/uom';

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
              path: 'trademark',
              element: <MasterTrademarkPage />,
            },
            {
              path: 'barang',
              element: <MasterBarangPage />,
            },
            {
              path: 'uom',
              element: <MasterUomPage />,
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
        {
          path: 'user',
          element: <UserPage />,
        },
        {
          path: 'shop',
          element: <ShopPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <LocaleProvider locale={id_ID}>
      <RouterProvider router={router} />
    </LocaleProvider>
  );
}

export default App;
