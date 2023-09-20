import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'catalog',
  storage,
  whitelist: ['favoritesItems', 'filters'],
};

const persistedReducer = persistReducer(persistConfig, catalogReducer);

export const store = configureStore({
  reducer: {
    catalog: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
