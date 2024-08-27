import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProduct } from "./productThunk";
import { productState } from "../../types";

const initialState: productState = {
  products: [],
  product: {},
  isLoading: false,
};

export const tableReduser = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
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
