import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.error,
      status: "completed",
    };
  }

  return state;
}

const useHttp = (requestFunction) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: null,
  });

  const sendRequest = useCallback(
    async (data) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(data);
        dispatch({ type: "SUCCESS", responseData });
      } catch (err) {
        dispatch({
          type: "ERROR",
          error: err.message || "Something Went Wrong",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
