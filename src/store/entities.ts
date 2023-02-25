import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from './todoSlice';
import filterReducer from './filterSlice';
import searchReducer from './searchSlice';

export default combineReducers({
  filter: filterReducer,
  todos: todosReducer,
  search: searchReducer,
});
