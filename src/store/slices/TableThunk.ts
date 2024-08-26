import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://63d304794abff88834170d21.mockapi.io";

const getApplications = createAsyncThunk(
  "applications/getApplications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/items`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { getApplications };
