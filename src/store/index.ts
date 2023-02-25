import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todoSlice';

const store = configureStore({
  reducer: todoReducer,
});

export { store };
