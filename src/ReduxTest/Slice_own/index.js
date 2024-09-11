import { createSlice } from "@reduxjs/toolkit";
// useReduxcer it is here

const Slice1 = createSlice({
  initialState: 0,
  name: "counter1", // key for unique in this Slice for
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
  },
});

const Slice2 = createSlice({
  initialState: 0,
  name: "counter2",
  reducers: {
    incrementD: (state) => {
      state === 0 ? (state = 90) : (state += 90);
      return state;
    },
    decrementD: (state) => {
      return state - state;
    },
  },
});

const Slice3 = createSlice({
  initialState: false,
  name: "counter3",
  reducers: {
    ToggleEvent: (state) => {
      return !state;
    },
  },
});

export default {
  Slice1: Slice1.reducer,
  Slice2: Slice2.reducer,
  Slice3: Slice3.reducer,
}; // store for
// , incrementD, decrementD
export const { increment, decrement } = Slice1.actions; // neccessary where we want for
export const { incrementD, decrementD } = Slice2.actions; // neccessary where we want for
export const { ToggleEvent } = Slice3.actions;
