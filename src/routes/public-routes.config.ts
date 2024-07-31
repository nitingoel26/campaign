import { lazy } from "react";
const LoginPage = lazy(() => import("../pages/login"));

import { loginPath } from "./routes.constant";
const publicRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
}[] = [
  {
    path: loginPath,
    Component: LoginPage,
  },
  {
    path: "*",
    Component: LoginPage,
  },
];

export default publicRoutes;
