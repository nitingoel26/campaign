import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { http } from "../../configs/http-client.config";
export interface AccessTokenPayloadType {}
export interface AccessTokenAPIResponseType {}

const accessTokenAPI = createAsyncThunk(
  "api.accessToken",
  async (data: AccessTokenPayloadType, thunkAPI) => {
    const url = "";
    try {
      const response = await http<AccessTokenAPIResponseType>({
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

interface AccessTokenInitialState {
  data: AccessTokenAPIResponseType | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccessTokenInitialState = {
  data: null,
  loading: false,
  error: null,
};

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(accessTokenAPI.fulfilled, (state, action) => {
        state.data = action.payload || null;
      })
      .addCase(accessTokenAPI.rejected, (state, action) => {
        state.error = "Failed";
      })
      .addCase(accessTokenAPI.pending, (state) => {
        console.log("pending....");
        state.loading = true;
      });
  },
});
