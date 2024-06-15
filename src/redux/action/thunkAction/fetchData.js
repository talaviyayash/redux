export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCHING_USER" });
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("yash");
        }, 2000);
      });
      dispatch({ type: "REQ_COMPLETE", data: response });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };
};
