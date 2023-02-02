import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsByDate } from 'services/transactionsAPI';

const initialState = {
  reports: [],
  isLoading: false,
  error: null,
};
export const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransactionsByDate.pending, handlePending)
      .addCase(getTransactionsByDate.fulfilled, (state, action) => {
        state.reports = action.payload;
        state.isLoading = false;
      })
      .addCase(getTransactionsByDate.rejected, handleRejected);
  },
});

export const reportsReducer = reportsSlice.reducer;
