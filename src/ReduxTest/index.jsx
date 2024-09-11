import { increment, decrement } from "./Slice_own";
import { useSelector, useDispatch } from "react-redux"; // strore se sekect karne ke liye state ko
import { incrementD, decrementD } from "./Slice_own";
import { ToggleEvent } from "../Slice_own";

const Index = () => {
  const counter1 = useSelector((state) => state.counter1);
  const counter2 = useSelector((state) => state.counter2);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h1>
          {"counter1 is"} {counter1}
        </h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => dispatch(incrementD())}>Increment</button>
        <h1>
          {"counter2 is"} {counter2}
        </h1>
        <button onClick={() => dispatch(decrementD())}>Decrement</button>
      </div>
      <button onClick={() => dispatch(ToggleEvent())}>ToggleEvent</button>
    </>
  );
};

export default Index;
