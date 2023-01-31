import { createSlice } from '@reduxjs/toolkit';

const reportsQuerySlice = createSlice({
  name: 'reportsQuery',
  initialState: {
    reportsQuery: '',
    filteredDate: [],
  },
  reducers: {
    reportsQueryAction(state, action) {
      state.reportsQuery = action.payload;
    },
    filteredDataAction(state, action) {
      state.filteredDate = action.payload;
    },
  },
});

export const { reportsQueryAction, filteredDataAction } =
  reportsQuerySlice.actions;

export const reportsQueryReducer = reportsQuerySlice.reducer;
