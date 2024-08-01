import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/UsersReducer";

const AppContext = createContext();

const API = `https://dummyjson.com/users`;

const initialState = {
  isError: false,
  users: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const users = await res.data.users;
      dispatch({ type: "GET_API_DATA", payload: users });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getUsers(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useUserContext };
