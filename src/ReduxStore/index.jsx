import { useSelector, useAppDispatch } from "react-redux";
import { increment, decrement } from "./Context";

const Index = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <>{count}</>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Index;
