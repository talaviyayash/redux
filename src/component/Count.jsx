import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../redux/action/counter.action";

export const Count = ({ a }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count.value);
  const increases = () => {
    dispatch(incrementAction());
  };
  return (
    <>
      <div>
        <button onClick={increases}>INCREMENT</button>
      </div>
    </>
  );
};
