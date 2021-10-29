import { REMOVE_TOKENS, SET_TOKEN } from "../action";

let initialState = localStorage.getItem("token");
initialState = initialState !== "" ? JSON.parse(initialState) : null;
export const TokenReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN: {
      localStorage.setItem("token", JSON.stringify(payload.token));

      return payload.token;
    }
    case REMOVE_TOKENS: {
      localStorage.setItem("token", "");

      return null;
    }
    default: {
      return state;
    }
  }
};