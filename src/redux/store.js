import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from 'services/authSlice';
import transactionsSlice from 'services/transactionsSlice';
import { reportsReducer } from './reports/reports';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const transactionsPersistConfig = {
  key: 'transactions',
  storage,
  whitelist: [],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    transactions: persistReducer(transactionsPersistConfig, transactionsSlice),
    reports: reportsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
