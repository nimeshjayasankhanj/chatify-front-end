import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "src/utils/axios";

export const customerLists = createAsyncThunk(
  "customer-lists",
  async (thunkApi) => {
    try {
      const response = await axios.get("http://localhost:8000/chat/customers");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
