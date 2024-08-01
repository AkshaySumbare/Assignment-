import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useUserContext } from "./UserContext";
import reducer from "../reducer/FilterReducer";



//*************For Storage hendling i have used Context API************** */
// ************For state Handling i have used useReducer ****************

const FilterContext = createContext();

const initialState = {
  filter_users: [],
  all_users: [],
  sorting_value: "male",
};

export const FilterContextProvider = ({ children }) => {
  const { users } = useUserContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //sorting  function
  const sorting = (event) => {
    let value = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_USERS", payload: users });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_USERS", payload: users });
  }, [users]);

  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterConext = () => {
  return useContext(FilterContext);
};
