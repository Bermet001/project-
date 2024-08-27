import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Detailinfo from "../pages/DetailInfo";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
    },

    {
      path: "/product/:id",
      element: <Detailinfo />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
