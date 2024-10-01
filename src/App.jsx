import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionPage from './Pages/Transaction/TransactionPage';
import Support from './Pages/Support/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard title="Dashboard" />,
  },
  {
    path: "/transaction",
    element: <TransactionPage title="Transaction" />,
  },
  {
    path: "/Support",
    element: <Support title="Support" />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
