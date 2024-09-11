import { useSelector, useDispatch } from "react-redux"; // s
import { increment, decrement } from "../Slice_own";
import { incrementD, decrementD } from "../Slice_own";
import { ToggleEvent } from "../Slice_own";

const Home = () => {
  const counter1 = useSelector((state) => state.counter1);
  const counter2 = useSelector((state) => state.counter2);
  const counter3 = useSelector((state) => state.counter3);
  const dispatch = useDispatch();

  if (counter3) {
    document.body.style.backgroundColor = "black";
  }
  if (!counter3) {
    document.body.style.backgroundColor = "white";
  }

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
      <div>
        <button onClick={() => dispatch(ToggleEvent())}>
          ToggleEvent : {counter3}
        </button>
      </div>
    </>
  );
};

export default Home;

// controoler
