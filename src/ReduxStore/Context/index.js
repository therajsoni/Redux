import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  initialState: 0,
  name: "counter", // unique banene ke liye
  reducer: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { decrement, increment } = CounterSlice.actions;
export default CounterSlice.reducer;
// const [state,dispatch] = usereducer(reducers,initial_val)
