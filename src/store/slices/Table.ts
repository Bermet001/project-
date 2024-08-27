import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProduct } from "./TableThunk";
import { Product } from "../../types";

interface tableState {
  applications: any[];
  product: Product;
  isLoading: boolean;
}

const initialState: tableState = {
  applications: [],
  product: {},
  isLoading: false,
};

export const tableReduser = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.applications = payload;
        state.isLoading = false;
      })

      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
        state.isLoading = false;
      })

      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
