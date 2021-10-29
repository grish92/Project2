import { REMOVE_USER, SET_USER } from "../action";

let initialState = localStorage.getItem("user");
initialState = initialState !== "" ? JSON.parse(initialState) : null;
export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      localStorage.setItem("user", JSON.stringify(payload.user));
      return payload.user;
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