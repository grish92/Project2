import {
  ADD_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
  UPDATE_NEW_CITY,
  UPDATE_NEW_DISTRICT,
  UPDATE_NEW_FLOOR_SIZE,
  UPDATE_NEW_INTRODUCTION,
  UPDATE_NEW_PRICE,
  UPDATE_NEW_ROOMS,
} from "../action.js";

let initialState = {
  myAnnouncements: [],
  newCity: "",
  newDistrict: "",
  newRooms: "",
  newFloorSize: "",
  newPrice: "",
  newIntroduction: "",
};

export const AddAnnouncementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANNOUNCEMENT:
      let apartment = {
        id: state.myAnnouncements.length + 1,
        city: state.newCity,
        district: state.newDistrict,
        rooms: state.newRooms,
        floorSize: state.newFloorSize,
        price: state.newPrice,
        introduction: state.newIntroduction,
      };
      return {
        ...state,
        myAnnouncements: [...state.myAnnouncements, apartment],
        city: "",
        newDistrict: "",
        newRooms: "",
        newFloorSize: "",
        newPrice: "",
        newIntroduction: "",
      };
    case DELETE_ANNOUNCEMENT:
      return {
        ...state,
        myAnnouncements: state.myAnnouncements.filter((apartment) => {
          if (apartment.id !== action.apartmentId) {
            return apartment;
          }
        }),
      };
    case UPDATE_NEW_CITY:
      return {
        ...state,
        newCity: action.body,
      };
    case UPDATE_NEW_DISTRICT:
      return {
        ...state,
        newDistrict: action.body,
      };
    case UPDATE_NEW_ROOMS:
      return {
        ...state,
        newRooms: action.body,
      };
    case UPDATE_NEW_FLOOR_SIZE:
      return {
        ...state,
        newFloorSize: action.body,
      };
    case UPDATE_NEW_PRICE:
      return {
        ...state,
        newPrice: action.body,
      };
    case UPDATE_NEW_INTRODUCTION:
      return {
        ...state,
        newIntroduction: action.body,
      };
    default:
      return state;
  }
};
