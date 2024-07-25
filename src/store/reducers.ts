import { combineReducers } from "@reduxjs/toolkit";
import { accessTokenSlice } from "./slices/access-token.slice";
import { refreshTokenSlice } from "./slices/refresh-token.slice";
const rootReducer = combineReducers({
  accessToken: accessTokenSlice,
  refreshToken: refreshTokenSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
