import { createSlice } from "@reduxjs/toolkit";
import { customerLists } from "src/service/customer-lists";

const initialState = {
  data: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const ChatSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(customerLists.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(customerLists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(customerLists.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default ChatSlice.reducer;
