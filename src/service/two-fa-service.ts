import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { TwoFAData } from "src/pages/two-fa";

export const verifyTwoFACode = createAsyncThunk(
  "verify-twoFA-code",
  async (data: TwoFAData, thunkApi) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/verify-two-fa`,
        data
      );
      return response.data;
    } catch (error) {
      let err = error as AxiosError;
      throw err;
    }
  }
);
