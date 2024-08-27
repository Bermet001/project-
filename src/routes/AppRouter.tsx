import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../components /Wrapper";
import Detailinfo from "../pages/DetailInfo";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "table",
      element: <Wrapper />,
    },

    {
      path: "table/:id",
      element: <Detailinfo />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
