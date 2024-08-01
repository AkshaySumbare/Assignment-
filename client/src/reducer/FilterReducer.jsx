import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_USERS":
      return {
        ...state,
        filter_users: [...action.payload],
        all_users: [...action.payload],
      };

    case "GET_SORT_VALUE":
      let userSortvalue = document.getElementById("sort");
      let sort_value = userSortvalue.options[userSortvalue.selectedIndex].value;

      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTING_USERS":
      //let newSortData;
      let result;
      let tempSortProduct = [...action.payload];
      if (tempSortProduct.length > 0 && state.sorting_value === "z-a") {
        result = tempSortProduct.sort((a, b) =>
          b.username.localeCompare(a.username)
        );
        console.log("result z-a", result);
      } else if (tempSortProduct.length > 0 && state.sorting_value === "a-z") {
        result = tempSortProduct.sort((a, b) =>
          a.username.localeCompare(b.username)
        );
        console.log("result a-z", result);
      } else if (
        tempSortProduct.length > 0 &&
        state.sorting_value === "female"
      ) {
        result = tempSortProduct.sort((a, b) =>
          a.gender.localeCompare(b.gender)
        );
        console.log("result female", result);
      } else if (tempSortProduct.length > 0 && state.sorting_value === "male") {
        result = tempSortProduct.sort((a, b) =>
          b.gender.localeCompare(a.gender)
        );
        console.log("result  male", result);
      }

      return {
        ...state,
        filter_users: result,
      };

    default:
      return state;
  }
};
export default FilterReducer;
