import { createSlice } from "@reduxjs/toolkit";
import { getApplications } from "./TableThunk";

interface tableState {
  applications: any[];
  isLoading: boolean;
}

const initialState: tableState = {
  applications: [],
  isLoading: false,
};

export const tableReduser = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApplications.fulfilled, (state, { payload }) => {
        state.applications = payload;
        state.isLoading = false;
      })

      .addCase(getApplications.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getApplications.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
