import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
 name: 'toDos',
 initialState: [],
 reducers: {
    addToDo: (state, action) => {
      state.push({ id: Date.now(), name: action.payload, completed: false });
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
    toggleToDo: (state, action) => {
      const index = state.findIndex((toDo) => toDo.id === action.payload);
      state[index].completed = !state[index].completed;
    },
 },
});

export const { addToDo, deleteToDo, toggleToDo } = toDoSlice.actions;

export default toDoSlice.reducer;