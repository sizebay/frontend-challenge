import { configureStore } from '@reduxjs/toolkit';
import { favoriteStore } from './favoriteStore';

export const globalStore = configureStore({
  reducer: {
    favorites: favoriteStore
  }
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;
