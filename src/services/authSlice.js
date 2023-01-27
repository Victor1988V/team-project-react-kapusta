import { createSlice } from '@reduxjs/toolkit';
import * as authApi from 'services/authAPI';

const initialState = {
  user: { name: null, emal: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  userId: null,
  isLoggedIn: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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

      .addCase(authApi.refreshToken.pending, handlePending)
      .addCase(authApi.refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
      })
      .addCase(authApi.refreshToken.rejected, handleRejected);
  },
});

export default authSlice.reducer;
