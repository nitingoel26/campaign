import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { refreshTokenAPI } from "../store/slices/refresh-token.slice";
import { RefreshTokenAPIResponseType } from "../store/slices/refresh-token.slice";
import { setLoginToken } from "../store/slices/login.slice";
type RequestConfigOptionalKeys = Pick<
  AxiosRequestConfig,
  "headers" | "params" | "data" | "baseURL"
>;

type RequestConfigRequiredKeys = Required<
  Pick<AxiosRequestConfig, "url" | "method">
>;
export type RequestConfig = RequestConfigRequiredKeys &
  RequestConfigOptionalKeys;
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const baseOptions: Partial<AxiosRequestConfig> = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosInstance = axios.create(baseOptions);
axiosInstance.interceptors.request.use(
  (config) => {
    const customConfig = config as CustomAxiosRequestConfig;
    const token = useAppSelector((state) => state.login.userToken);
    if (token) {
      customConfig.headers["Authorization"] = `Bearer ${token}`;
    }
    return customConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const dispatch = useAppDispatch();
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) {
          const navigate = useNavigate();
          navigate("/login");
          return Promise.reject(new Error("Refresh token is missing"));
        }
        dispatch(refreshTokenAPI({ refreshToken })).then((response) => {
          const result = response?.payload as RefreshTokenAPIResponseType;
          const newAccessToken = result?.data?.userToken;
          dispatch(setLoginToken({ token: newAccessToken }));
          localStorage.setItem("userToken", newAccessToken);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        });
      } catch (refreshError) {
        // navigate to login screen if refresh token fails
        const navigate = useNavigate();
        navigate("/login");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export function http<T>(options: RequestConfig) {
  return axios.request<T>({
    ...baseOptions,
    ...options,
    headers: {
      ...baseOptions.headers,
    },
  });
}
