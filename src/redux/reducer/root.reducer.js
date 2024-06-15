import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import taskReducer from "./todo.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  count: counterReducer,
  task: taskReducer,
  user: userReducer,
});

export default rootReducer;
