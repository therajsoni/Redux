import { ConfigureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "../Context";

export const Store = ConfigureStore({
  reducer: {
    counter: CounterSlice, // state name
  },
});
