import { REMOVE_USER, SET_USER } from "../action";

let initialState = localStorage.getItem("user");
initialState = initialState !== "" ? JSON.parse(initialState) : null;
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.user;
    }
    case REMOVE_USER: {
      localStorage.setItem("user", "");
      return null;
    }
    default: {
      return state;
    }
  }
};
