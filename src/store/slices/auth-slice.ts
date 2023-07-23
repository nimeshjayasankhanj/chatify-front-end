import { createSlice } from "@reduxjs/toolkit";
import { verifyTwoFACode } from "src/service/two-fa-service";

const initialState = {
  data: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(verifyTwoFACode.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(verifyTwoFACode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("action.payload", action.payload);
        localStorage.setItem("token", action.payload.data.token);
        const data = {
          id: action.payload.data.id,
          name: action.payload.data.full_name,
          role: action.payload.data.user_type,
        };
        localStorage.setItem("user", JSON.stringify(data));
        state.data = localStorage.getItem("user") ?? {};
      })
      .addCase(verifyTwoFACode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default AuthSlice.reducer;
