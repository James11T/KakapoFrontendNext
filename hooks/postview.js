import { useReducer, useContext, createContext } from "react";

const postContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "setPost": {
      return {
        ...state,
        post: action.post,
        postVisible: action.postVisible || false,
      };
    }
    case "showPost": {
      return { ...state, postVisible: true };
    }
    case "hidePost": {
      return { ...state, postVisible: false };
    }
    case "setPostVisible": {
      return { ...state, postVisible: action.postVisible };
    }
    default: {
      throw new Error("Invalid reducer action type.");
    }
  }
};

const PostViewProvider = ({ children }) => {
  const [postViewState, dispatch] = useReducer(reducer, {
    post: null,
    postVisible: false,
  });

  const setPost = (post, postVisible = true) =>
    dispatch({ type: "setPost", post: post, postVisible: postVisible });

  const showPost = () => dispatch({ type: "showPost" });

  const hidePost = () => dispatch({ type: "hidePost" });

  const setPostVisible = (postVisible) =>
    dispatch({ type: "setPostVisible", postVisible: postVisible });

  return (
    <postContext.Provider
      value={{ postViewState, setPost, showPost, hidePost, setPostVisible }}
    >
      {children}
    </postContext.Provider>
  );
};

const usePostView = () => useContext(postContext);

export { PostViewProvider, usePostView };
