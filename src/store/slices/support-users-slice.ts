import { createSlice } from "@reduxjs/toolkit";
import { supportUsers } from "src/service/support-users";

const initialState = {
  data: [],
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
      .addCase(supportUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(supportUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(supportUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default AuthSlice.reducer;
