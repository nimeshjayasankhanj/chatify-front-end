import { createSlice } from "@reduxjs/toolkit";
import { chatMessages } from "src/service/chat-messages";

interface ChatObject {
  _id: string;
  message: string;
}

interface InitialState {
  data: ChatObject[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  data: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const ChatMessageSlice = createSlice({
  name: "chat-message",
  initialState,
  reducers: {
    addNewMessage: (state, action) => {
      const { message } = action.payload;
      const newMessage = {
        message: message,
        _id: "dd",
      };

      state.data.push(newMessage);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(chatMessages.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(chatMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(chatMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const { addNewMessage } = ChatMessageSlice.actions;
export default ChatMessageSlice.reducer;
