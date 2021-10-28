export const ADD_ANNOUNCEMENT = "ADD_ANNOUNCEMENT";
export const createAddAnnouncement = () => ({
  type: ADD_ANNOUNCEMENT,
});
export const DELETE_ANNOUNCEMENT = "DELETE_ANNOUNCEMENT";
export const createDeleteAnnouncement = (apartmentId) => ({
  type: DELETE_ANNOUNCEMENT,
  apartmentId,
});

export const UPDATE_NEW_CITY = "UPDATE_NEW_CITY";
export const updateNewCityCreator = (body) => {
  return {
    type: UPDATE_NEW_CITY,
    body: body,
  };
};
export const UPDATE_NEW_DISTRICT = "UPDATE_NEW_DISTRICT";
export const updateNewDistrictCreator = (body) => {
  return {
    type: UPDATE_NEW_DISTRICT,
    body: body,
  };
};
export const UPDATE_NEW_ROOMS = "UPDATE_NEW_ROOMS";
export const updateNewRoomsCreator = (body) => {
  return {
    type: UPDATE_NEW_ROOMS,
    body: body,
  };
};
export const UPDATE_NEW_FLOOR_SIZE = "UPDATE_NEW_FLOOR_SIZE";
export const updateNewFloorSizeCreator = (body) => {
  return {
    type: UPDATE_NEW_FLOOR_SIZE,
    body: body,
  };
};
export const UPDATE_NEW_PRICE = "UPDATE_NEW_PRICE";
export const updateNewPriceCreator = (body) => {
  return {
    type: UPDATE_NEW_PRICE,
    body: body,
  };
};
export const UPDATE_NEW_INTRODUCTION = "UPDATE_NEW_INTRODUCTION";
export const updateNewIntroductionCreator = (body) => {
  return {
    type: UPDATE_NEW_INTRODUCTION,
    body: body,
  };
};

export const ADD_FAVORITE = "ADD_FAVORITE";
export const createAddFavorite = (apartment) => ({
  type: ADD_FAVORITE,
  apartment,
});

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const createRemoveFavorite = (apartmentId) => ({
  type: REMOVE_FAVORITE,
  apartmentId,
});

export const DELETE_ALL = "DELETE_ALL";
export const createDeleteFavorite = () => ({
  type: DELETE_ALL,
});
