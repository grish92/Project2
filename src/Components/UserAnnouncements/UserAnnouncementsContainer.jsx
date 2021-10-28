import { connect } from "react-redux";
import { createDeleteAnnouncement } from "../../ReduxStore/action";
import { UserAnnouncement } from "./UserAnnouncements";

let mapStateToProps = (state) => {
  return {
    myAnnouncements: state.Announcement.myAnnouncements,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    deleteAnnouncement: (apartmentId) => {
      dispatch(createDeleteAnnouncement(apartmentId));
    },
  };
};

export const UserAnnouncementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAnnouncement);
