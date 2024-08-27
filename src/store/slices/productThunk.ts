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

export interface Product {
  id: string;
  name: string;
  price: number;
}
interface GetProductThunkAPI {
  rejectValue: string;
}

const getProduct = createAsyncThunk<Product, any, GetProductThunkAPI>(
  "product/getProduct",

  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Product>(`${BASE_URL}/items/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
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
