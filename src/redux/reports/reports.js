import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsByDate } from 'services/transactionsAPI';

const initialState = {
  reports: [],
  isLoading: false,
  error: null,
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransactionsByDate.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionsByDate.fulfilled, (state, { payload }) => {
        state.reports = payload;
        state.isLoading = false;
      })
      .addCase(getTransactionsByDate.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const reportsReducer = reportsSlice.reducer;
