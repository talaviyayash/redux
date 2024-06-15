import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { Count } from "./component/Count";
import Todo from "./component/Todo";
import User from "./component/User";
import TodoApp from "./component/TodoApp";

function App() {
  const a = "yash";
  return (
    <>
      <Provider store={store}>
        {/* <div>
          <Count />
        </div>
        <div>
          <Todo />
        </div>
        <div>
          <User />
        </div> */}
        <div>
          <TodoApp />
        </div>
      </Provider>
    </>
  );
}

export default App;
