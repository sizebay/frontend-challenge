import { createSlice, nanoid } from '@reduxjs/toolkit'
import { ChoreActionInterface, ChoreInterface } from './utils/interfaces'





export const choresSlice = createSlice({
  name: 'chores',
  initialState: { value: [] as ChoreInterface[]},
  reducers: {
    addChores: {
      reducer(state, action: ChoreActionInterface) {
        state.value.push(action.payload)
      },
      prepare(chore) {
        return {
          payload: {
            id: nanoid(),
            chore,
            isDone: false,
          }
        }
      }
    },
    updateChores: {
      reducer(state, action: ChoreActionInterface) {
        const { id, isDone } = action.payload
        const existingChore = state.value.find(chore => chore.id === id)
        if (existingChore) {
          existingChore.isDone = isDone
        }
      },
      prepare(id, chore, isDone) {
        return {
          payload: {
            id,
            chore,
            isDone
          }
        }
      }
    },
    removeChores: {
      reducer(state, action: ChoreActionInterface) {
        const { id } = action.payload
        const existingChore = state.value.find(chore => chore.id === id)
        if (existingChore) {
          state.value = state.value.filter(chore => chore.id !== id)
        }
      },
      prepare(id, chore?, isDone?) {
        return {
          payload: {
            id,
            chore,
            isDone,
          }
        }
      }
    } 
  }
})

export const { addChores, updateChores, removeChores } = choresSlice.actions
export default choresSlice.reducer
