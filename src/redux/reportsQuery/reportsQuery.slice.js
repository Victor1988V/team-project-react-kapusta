import { createSlice } from '@reduxjs/toolkit';

const reportsQuerySlice = createSlice({
  name: 'reportsQuery',
  initialState: {
    reportsQuery: '',
    filteredDate: [],
  },
  reducers: {
    reportsQueryAction(state, { payload }) {
      state.reportsQuery = payload;
    },
    filteredDataAction(state, { payload }) {
      state.filteredDate = payload;
    },
  },
});

export const { reportsQueryAction, filteredDataAction } =
  reportsQuerySlice.actions;

export const reportsQueryReducer = reportsQuerySlice.reducer;
