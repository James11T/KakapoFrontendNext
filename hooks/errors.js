import { useReducer } from "react";

const errorReducer = (state, action) => {
  switch (action.type) {
    case "setError": {
      return { ...state, [action.error]: action.value };
    }
    case "clearError": {
      return { ...state, [action.error]: "" };
    }
    case "clearAllErrors": {
      return {};
    }
  }
};

const useErrors = () => {
  const [errors, dispatch] = useReducer(errorReducer, {});

  const setError = (error, value) => {
    dispatch({ type: "setError", error, value });
  };

  const clearError = (error) => {
    dispatch({ type: "clearError", error });
  };

  const clearAllErrors = () => {
    dispatch({ type: "clearAllErrors" });
  };

  return { errors, setError, clearError, clearAllErrors };
};

export { useErrors };
