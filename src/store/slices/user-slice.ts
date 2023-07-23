import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "src/service/user-details";

interface UserObject {
  full_name?: string;
  email?: string;
  phone_number?: string;
}

interface InitialState {
  data: UserObject;
  isSuccess: boolean;
  loading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  data: {},
  isSuccess: false,
  loading: false,
  isError: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default UserSlice.reducer;
