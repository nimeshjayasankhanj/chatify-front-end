import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "src/utils/axios";

export const supportUsers = createAsyncThunk(
  "support-users",
  async (thunkApi) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/user/support-agent-lists"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
