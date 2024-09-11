import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment(state) {
      return state;
    },
    decrement(state) {
      return state;
    },
  },
});

export const { increment, decrement } = slice.reducer.actions;
export default slice.reducer;
