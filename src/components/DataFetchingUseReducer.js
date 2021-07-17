import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  post: {},
  error: "",
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        post: action.payload,
        error: "",
        loading: false,
      };

    case "Error":
      return {
        post: "",
        error: "Something went wrong",
        loading: false,
      };
    default:
      return state;
  }
};

export function DataFetchingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => dispatch({ type: "Success", payload: response.data }))
      .catch((err) => dispatch({ type: "Error" }));
  }, []);
  return (
    <div>
      {state.loading ? (
        <h2>loading....</h2>
      ) : (
        <div>
          <h2 style={{ color: "blue" }}>{state.post.title}</h2>
          <h2 style={{ color: "red" }}>{state.error}</h2>
        </div>
      )}
    </div>
  );
}

export default DataFetchingUseReducer;
