import { connect } from "react-redux";
import { NavBar } from "./Navbar";

let mapStateToProps = (state) => {
  return {
    menuItems: state.Navbar.user,
  };
};

export const NavbarContainer = connect(mapStateToProps)(NavBar);
