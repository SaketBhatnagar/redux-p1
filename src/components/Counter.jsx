import { useState } from "react";
import { INCREMENT, DECREMENT } from "../services/actions/action";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  let redux_state = useSelector(state => state.changeTheNumber);
  let dispatch = useDispatch();
  return (
    <>
      <h1>{redux_state}</h1>
      <button onClick={() => dispatch(INCREMENT())}>increment</button>
      <button onClick={() => dispatch(DECREMENT())}>decrement</button>
    </>
  );
};

export default Counter;
