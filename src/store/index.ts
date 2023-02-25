import { configureStore } from '@reduxjs/toolkit';

import reducer from './entities';

const store = configureStore({
  reducer,
});

export { store };
