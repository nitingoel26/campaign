import { createSlice } from "@reduxjs/toolkit";

interface loginState {
  userToken: string | null;
}
const initialState: loginState = {
  userToken: null,
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLoginToken: (state, action) => {
      state.userToken = action.payload.token;
    },
  },
});

export const { setLoginToken } = loginSlice.actions;
export default loginSlice.reducer;
