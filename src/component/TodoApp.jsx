import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { actionAddDATA } from "../redux/reducer/todo.reducer";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { name, task: data, flag, id } = useSelector((state) => state.task);
  const addData = () => {
    if (flag === "ADD") {
      dispatch({
        type: "ADD_TASK",
        payload: {
          id: uuid4(),
          name: name,
        },
      });
    } else {
      dispatch({
        type: "UPDATE_TASK",
        payload: {
          id,
          name: name,
        },
      });
    }
    dispatch(actionAddDATA({ name: "" }));
  };
  const updateTodo = ({ name, id }) => {
    dispatch(actionAddDATA({ name, id, flag: "EDIT" }));
  };
  const deleteTask = ({ name, id }) => {
    dispatch({
      type: "DELETE_TASK",
      payload: {
        id,
      },
    });
  };
  return (
    <>
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(actionAddDATA({ name: e.target.value }))}
      />
      <button onClick={addData}>{flag === "ADD" ? "Add" : "Edit"}</button>
      <br />
      <br />
      {data?.map((value, index) => {
        const { name, id } = value;
        return (
          <Fragment key={index}>
            <div>
              {value.name}
              <button onClick={() => updateTodo({ name, id })}>update</button>
              <button onClick={() => deleteTask({ id })}>delete</button>
            </div>
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default TodoApp;
