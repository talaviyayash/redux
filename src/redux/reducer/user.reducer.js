const initialState = {
  isLoading: false,
  error: "",
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_USER":
      return {
        ...state,
        isLoading: true,
      };
    case "REQ_COMPLETE":
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
