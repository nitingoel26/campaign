import { useMsal } from "@azure/msal-react";
import { useAppDispatch } from "../store/store-hooks";
import { accessTokenAPI } from "../store/slices/access-token.slice";
import { LOGIN_REQUEST } from "../configs/msal.config";
import { setLoginToken } from "../store/slices/login.slice";
const useAuthHandlers = () => {
  const { instance } = useMsal();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    instance
      .loginPopup(LOGIN_REQUEST)
      .then((loginResponse: any) => {
        const accessToken = loginResponse.accessToken;
        if (accessToken) {
          dispatch(accessTokenAPI({ data: { accessToken } }))
            .then((response: any) => {
              localStorage.setItem("userToken", response?.userToken);
              dispatch(setLoginToken({ token: response?.userToken }));
            })
            .catch((error) => {
              console.error(error);
              handleLogout();
            });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleLogout = () => {
    instance
      .logoutRedirect({
        postLogoutRedirectUri: "http://localhost:3000/login",
      })
      .then(() => {
        dispatch(setLoginToken({ token: null }));
        localStorage.removeItem("userToken");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return { handleLogin, handleLogout };
};

export default useAuthHandlers;
