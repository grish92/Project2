import { connect } from "react-redux";
import { createSetTokens, createSetUser } from "../../../ReduxStore/action";
import { Login } from "./Login";

let mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(createSetTokens(token));
    },
    setUser: (user) => {
      dispatch(createSetUser(user));
    },
  };
};

export const LoginContainer = connect(mapDispatchToProps)(Login);
