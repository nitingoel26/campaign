import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { privateRouter, publicRouter } from "../../router";
import { useAppSelector } from "../../store/store-hooks";

interface Props {}
const RouterContainer: React.FC<Props> = () => {
  const token = useAppSelector((state) => state.login.userToken);
  return token ? (
    <Suspense fallback={<>loading</>}>
      <RouterProvider router={privateRouter} />
    </Suspense>
  ) : (
    <Suspense fallback={<>loading</>}>
      <RouterProvider router={publicRouter} />
    </Suspense>
  );
};

export default RouterContainer;
