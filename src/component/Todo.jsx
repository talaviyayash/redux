import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  function dispatchAction() {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: "1",
        name: name,
      },
    });
  }
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={dispatchAction}>Add</button>
    </>
  );
};

export default Todo;
