import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://63d304794abff88834170d21.mockapi.io";

const getProducts = createAsyncThunk(
  "products/getProducts",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/items`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getProduct = createAsyncThunk(
  "product/getProduct",

  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/items/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const searchProduct = createAsyncThunk(
  "product/searchProduct",

  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://63d304794abff88834170d21.mockapi.io/items?search=${encodeURIComponent(
          searchTerm
        )}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { getProducts, getProduct, searchProduct };
