import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "src/utils/axios";

export const customerLists = createAsyncThunk(
  "customer-lists",
  async (thunkApi) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/chat/customers`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
