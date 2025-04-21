import { useReducer } from "react";

const init = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "deccrement":
      return state - 1;
    case "reset":
      return init;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, init);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Like</button>
      <button onClick={() => dispatch("deccrement")}>Dislike</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </>
  );
}

export default UseReducer;
