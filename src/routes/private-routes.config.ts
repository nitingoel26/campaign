import { lazy } from "react";
import { Permissions } from "../constants/permissions.constants";
const privateRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
  permission: string[];
}[] = [];

export default privateRoutes;
