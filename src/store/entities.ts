import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from './todoSlice';
import filterReducer from './filterSlice';

export default combineReducers({
  filter: filterReducer,
  todos: todosReducer,
});
