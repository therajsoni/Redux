import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./context/index";

const Index = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch("");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Index;
