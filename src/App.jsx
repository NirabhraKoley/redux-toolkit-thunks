import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "./components/Products";
import { Dashboard } from "./components/Dashboard";
import {AppLayout} from './components/layout/AppLayout'
import { createBrowserRouter, RouterProvider } from "react-router";
import { Cart } from "./components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
