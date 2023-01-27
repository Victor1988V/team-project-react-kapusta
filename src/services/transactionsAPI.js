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

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', user);
      token.set(data.token);
      return data;
    } catch (error) {
      // ADD Notify ABOUT ERROR

      if (error.response.status === 400) {
        Notify.warning(`Registration is invalid`, {
          background: '#ef5350',
          fontSize: '16px',
          width: '350px',
        });
      }

      if (error.response.status === 409) {
        Notify.warning(`User ${user.email} is existing`, {
          background: '#ef5350',
          fontSize: '16px',
          width: '350px',
        });
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    // ADD Notify ABOUT ERROR

    Notify.warning(`Your email or password is invalid`, {
      background: '#ef5350',
      fontSize: '16px',
      width: '350px',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    // ADD Notify ABOUT ERROR

    Notify.warning(`Logout is invalid`, {
      background: '#ef5350',
      fontSize: '16px',
      width: '350px',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // ADD Notify ABOUT ERROR

      //   Notify.warning(`${error.message}`, {
      //     background: '#ef5350',
      //     fontSize: '16px',
      //     width: '350px',
      //   });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
