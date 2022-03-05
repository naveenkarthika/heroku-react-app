import React from "react";

import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};

function State() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>State: {state} </h2>
      <br />
      <button onClick={() => dispatch({ type: "plus" })}>Plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>Minus</button>
      <br />
    </div>
  );
}

export default State;
