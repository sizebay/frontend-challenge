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
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todoIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = slice.actions;

export const selectTotalTodos: Selector<RootState, Todo[]> = createSelector(
  (state: RootState) => state.todos,
  (todos: Todo[]) => todos
);

export default slice.reducer;
