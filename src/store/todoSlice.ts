import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector, Selector } from 'reselect';
import { RootState, Todo } from '../@types';

const initialState: RootState = {
  todos: [],
};

const storedState = localStorage.getItem('todos');
if (storedState) {
  initialState.todos = JSON.parse(storedState);
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo } = slice.actions;

export const selectTotalTodos: Selector<RootState, Todo[]> = createSelector(
  (state: RootState) => state.todos,
  (todos: Todo[]) => todos
);

export default slice.reducer;
