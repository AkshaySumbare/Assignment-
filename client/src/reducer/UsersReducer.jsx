import React from "react";

const UsersReducer = (state, action) => {
  switch (action.type) {

    case "GET_API_DATA":
      return {
        ...state,
        users: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
export default UsersReducer;
