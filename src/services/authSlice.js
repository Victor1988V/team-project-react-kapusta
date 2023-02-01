import { createSlice } from '@reduxjs/toolkit';
import * as authApi from 'services/authAPI';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  userId: null,
  userEmail: '',
  isLoggedIn: false,
  balance: 0,
  transactions: [],
  isFetchingCurrentUser: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;

  if (action.payload.code === 401) {
    state.accessToken = null;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authApi.register.pending, handlePending)
      .addCase(authApi.register.fulfilled, (state, action) => {
        state.userId = action.payload.id;
      })
      .addCase(authApi.register.rejected, handleRejected)

      .addCase(authApi.logIn.pending, handlePending)
      .addCase(authApi.logIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.userEmail = action.payload.userData.email;
        state.isLoggedIn = true;
      })
      .addCase(authApi.logIn.rejected, handleRejected)

      .addCase(authApi.logOut.pending, handlePending)
      .addCase(authApi.logOut.fulfilled, (state, action) => {
        state.userId = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
      })
      .addCase(authApi.logOut.rejected, handleRejected)

      .addCase(authApi.refreshToken.pending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authApi.refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authApi.refreshToken.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
      })

      .addCase(authApi.getAllUserInfo.pending, handlePending)
      .addCase(authApi.getAllUserInfo.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.transactions = action.payload.transactions;
        state.userEmail = action.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(authApi.getAllUserInfo.rejected, handleRejected);
  },
});

export default authSlice.reducer;
export const { setAccessToken, setBalance } = authSlice.actions;
