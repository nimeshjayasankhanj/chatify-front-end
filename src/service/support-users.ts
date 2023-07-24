import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "src/utils/axios";

export const supportUsers = createAsyncThunk(
  "support-users",
  async (thunkApi) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/support-agent-lists`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
