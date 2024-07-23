import { useAppSelector } from "../app/hooks";
import { hasPermission } from "../utils/permission.util";

const usePermission = (permissionRequired: string[]) => {
  const userPermissions = [""];
  return hasPermission(permissionRequired, userPermissions!);
};

export default usePermission;
