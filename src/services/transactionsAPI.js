import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (incomeData, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.post('/transaction/income', incomeData);
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/transaction/income');
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  'transactions/addExpense',
  async (expenseData, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.post('/transaction/expense', expenseData);
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpense = createAsyncThunk(
  'transactions/getExpense',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/transaction/expense');
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      // Very path param
      const { data } = await axios.delete(`/transaction/${transactionId}`);
      Notify.success('Transaction deleted successfully', {
        fontSize: '16px',
        width: '350px',
      });
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  'transaction/income-categories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/transaction/income-categories');
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  'transaction/expense-categories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/transaction/expense-categories');
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsByDate = createAsyncThunk(
  'transaction/period-data',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/transaction/period-data?date=' + date);
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBalance = createAsyncThunk(
  'user/balance',
  async (balance, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.patch('/user/balance', {
        newBalance: balance,
      });
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
