import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action/thunkAction/fetchData";

const User = () => {
  const { isLoading, error, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <div>User</div>
      {isLoading && <div>Loading....</div>}
      {Boolean(data.length) && <div>completed</div>}
      {error && <div>Error</div>}
      <button onClick={() => dispatch(fetchData())}>click</button>
    </>
  );
};

export default User;
