import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "src/utils/axios";

export const userDetails = createAsyncThunk(
  "chat-messages",
  async (id: string | undefined, thunkApi) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/user/profile-details`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
