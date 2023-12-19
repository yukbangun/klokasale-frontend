import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
  ]);
  return (
    <div>
      Hello World
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
