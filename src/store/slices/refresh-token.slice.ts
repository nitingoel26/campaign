import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { http } from "../../configs/http-client.config";
export interface RefreshTokenPayloadType {
  refreshToken: string;
}
export interface RefreshTokenAPIResponseType {
  data: any;
}

export const refreshTokenAPI = createAsyncThunk(
  "api.refreshToken",
  async (data: RefreshTokenPayloadType, thunkAPI) => {
    const url = "";
    try {
      const response = await http<RefreshTokenAPIResponseType>({
        url,
        method: "POST",
        ...data,
      });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue((e as AxiosError).response);
      else alert("errror...");
    }
  }
);

interface RefreshTokenInitialState {
  data: RefreshTokenAPIResponseType | null;
  loading: boolean;
  error: string | null;
}

const initialState: RefreshTokenInitialState = {
  data: null,
  loading: false,
  error: null,
};

const refreshTokenSlice = createSlice({
  name: "refreshToken",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(refreshTokenAPI.fulfilled, (state, action) => {
        state.data = action.payload || null;
      })
      .addCase(refreshTokenAPI.rejected, (state, action) => {
        state.error = "Failed";
      })
      .addCase(refreshTokenAPI.pending, (state) => {
        console.log("pending....");
        state.loading = true;
      });
  },
});
export default refreshTokenSlice.reducer;
