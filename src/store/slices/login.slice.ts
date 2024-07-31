import { createSlice } from "@reduxjs/toolkit";

interface loginState {
  loginPopup: boolean;
}
const initialState: loginState = {
  loginPopup: false,
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    showLoginPopup: (state) => {
      state.loginPopup = true;
    },
    hideLoginPopup: (state) => {
      state.loginPopup = false;
    },
  },
});

export const { showLoginPopup, hideLoginPopup } = loginSlice.actions;
export default loginSlice.reducer;
