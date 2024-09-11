import { configureStore } from "@reduxjs/toolkit";
import Slice1Rreducer from "../Slice_own";

export const Store = configureStore({
  reducer: {
    counter1: Slice1Rreducer.Slice1,
    counter2: Slice1Rreducer.Slice2,
    counter3: Slice1Rreducer.Slice3,
  },
});
