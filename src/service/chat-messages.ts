import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "src/utils/axios";

export const chatMessages = createAsyncThunk(
  "chat-messages",
  async (id: string | undefined, thunkApi) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/chat/get-chat-lists/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
