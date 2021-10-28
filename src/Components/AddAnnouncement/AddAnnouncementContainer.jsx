import { AddAnnouncement } from "./AddAnnouncement";
import { connect } from "react-redux";
import {
  createAddAnnouncement,
  updateNewCityCreator,
  updateNewDistrictCreator,
  updateNewFloorSizeCreator,
  updateNewIntroductionCreator,
  updateNewPriceCreator,
  updateNewRoomsCreator,
} from "../../ReduxStore/action";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    myAnnouncements: state.Announcement.myAnnouncements,
    city: state.Announcement.newCity,
    district: state.Announcement.newDistrict,
    rooms: state.Announcement.newRooms,
    floorSize: state.Announcement.newFloorSize,
    price: state.Announcement.newPrice,
    introduction: state.Announcement.newIntroduction,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addAnnouncement: () => {
      dispatch(createAddAnnouncement());
    },
    onChangeNewCity: (body) => {
      dispatch(updateNewCityCreator(body));
    },
    onChangeNewDistrict: (body) => {
      dispatch(updateNewDistrictCreator(body));
    },
    onChangeNewRooms: (body) => {
      dispatch(updateNewRoomsCreator(body));
    },
    onChangeNewPrice: (body) => {
      dispatch(updateNewPriceCreator(body));
    },
    onChangeNewFloorSize: (body) => {
      dispatch(updateNewFloorSizeCreator(body));
    },
    onChangeNewIntroduction: (body) => {
      dispatch(updateNewIntroductionCreator(body));
    },
  };
};

export const AddAnnouncementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAnnouncement);
