import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { privateRouter, publicRouter } from "../../router";

interface Props {}
const RouterContainer: React.FC<Props> = () => {
  const token = localStorage.getItem("accessToken");
  console.log("token", token, publicRouter);
  return token ? (
    <Suspense fallback={<>loading</>}>
      <RouterProvider router={privateRouter} />
    </Suspense>
  ) : (
    <RouterProvider router={publicRouter} />
  );
};

export default RouterContainer;
