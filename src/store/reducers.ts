import { combineReducers } from "@reduxjs/toolkit";
import accessTokenSlice from "./slices/access-token.slice";
import refreshTokenSlice from "./slices/refresh-token.slice";
import loginSlice from "./slices/login.slice";

const rootReducer = combineReducers({
  accessToken: accessTokenSlice,
  refreshToken: refreshTokenSlice,
  login: loginSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
