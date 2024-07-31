import { createBrowserRouter } from "react-router-dom";
import privateRoutes from "./routes/private-routes.config";
import publicRoutes from "./routes/public-routes.config";
import { Outlet } from "react-router-dom";
export const publicRouter = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: publicRoutes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
]);

export const privateRouter = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: privateRoutes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
]);
