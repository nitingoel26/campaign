import { createBrowserRouter } from "react-router-dom";
import PermissionGuard from "./containers/permissions/permission-gaurd.container";
import privateRoutes from "./routes/private-routes.config";
import publicRoutes from "./routes/public-routes.config";

export const publicRouter = createBrowserRouter([
  {
    path: "",
    element: <></>,
    children: publicRoutes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
]);

export const privateRouter = createBrowserRouter([
  {
    path: "",
    element: <></>,
    children: privateRoutes.map(({ path, Component, permission }) => ({
      path,
      element: (
        <PermissionGuard permission={permission}>
          <Component />
        </PermissionGuard>
      ),
    })),
  },
]);
