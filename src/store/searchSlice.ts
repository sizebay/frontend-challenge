import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
