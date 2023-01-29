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
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', user);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    Notify.failure(error.response.data.message, {
      fontSize: '16px',
      width: '350px',
      padding: '20px',
    });

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  token.set(state.auth.accessToken);
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    Notify.warning(error.response.data.message, {
      fontSize: '16px',
      width: '350px',
    });

    return thunkAPI.rejectWithValue(error.message);
  }
});

//logInGoogle in FUTURE

// export const logInGoogle = createAsyncThunk(
//   'auth/google',
//   async (user, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/auth/google', user);
//       token.set(data.accessToken);
//       return data;
//     } catch (error) {
//       Notify.warning(error.response.data.message, {
//         fontSize: '16px',
//         width: '350px',
//       });

//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const refreshToken = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      token.set(state.auth.refreshToken);
      const { data } = await axios.post('/auth/refresh', {
        sid: state.auth.sid,
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

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
