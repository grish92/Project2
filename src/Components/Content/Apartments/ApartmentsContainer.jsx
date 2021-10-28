import { connect } from "react-redux";

import { Apartments } from "./Apartments";

let mapStateToProps = (state) => {
  return {
    apartments: state.Content.apartmentsAll,
    favoritesList: state.Content.favoritList,
    myAnnouncements: state.Announcement.myAnnouncements,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export const ApartmentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Apartments);
