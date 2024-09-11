import { useReducer } from "react";

export default function Reducers() {
  const initialState = 0;
  function reducer(state, action) {
    if (action.type == "Inc") {
      return state + 1;
    }
    if (action.type == "Dec") {
      return state - 1;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "Inc" })}>
        Increment : {state}
      </button>
      <button onClick={() => dispatch({ type: "Dec" })}>
        Decrement : {state}
      </button>
      <h1>{state} value is here !</h1>
    </div>
  );
}
