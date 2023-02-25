import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector, Selector } from 'reselect';
import { RootState, Todo } from '../@types';

let initialState: Todo[] = [];

const storedState = localStorage.getItem('todos');
if (storedState) {
  initialState = JSON.parse(storedState);
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state[todoIndex] = action.payload;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const selectFilteredTodos: Selector<RootState, Todo[]> = createSelector(
  (state: RootState) => state.todos,
  selectFilter,
  (todos: Todo[], filter: string) => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.done);
      case 'pending':
        return todos.filter(todo => !todo.done);
      default:
        return [...todos];
    }
  }
);

export const selectTodosSize = (state: RootState) => state.todos.length;

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
