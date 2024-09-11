import { configureStore } from "@reduxjs/toolkit";
import { slice } from "../context";

export const store = configureStore({
  reducer: {
    count: slice,
  },
});
