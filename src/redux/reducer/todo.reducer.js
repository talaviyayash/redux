const initialState = {
  task: [],
  id: "",
  name: "",
  flag: "ADD",
};

const taskReducer = (state = initialState, action) => {
  // console.log(action?.payload);
  const { id = "", name } = action?.payload ?? {};
  const { task } = state;
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        id: "",
        name: "",
        flag: "ADD",
        task: [...state.task, action.payload],
      };
    case "DELETE_TASK":
      const updatedTaskArray = task.filter((value) => value.id !== id);
      return {
        ...state,
        id: "",
        flag: "ADD",
        task: updatedTaskArray,
      };
    case "UPDATE_TASK":
      const updatedArray = task.map((value) => {
        if (id === value.id) {
          return {
            ...value,
            name,
          };
        }
        return value;
      });
      return {
        ...state,
        id: "",
        name: "",
        flag: "ADD",
        task: updatedArray,
      };
    default:
      return state;
  }
};

export default taskReducer;

export const actionAddDATA = (payload) => {
  return {
    type: "ADD_DATA",
    payload,
  };
};
