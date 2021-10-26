export const FILTER_APARTMENTS='FILTER_APARTMENTS'

export const filterApartment=(apartmentCity,apartmentDistrict,apartmentPrice,apartmentRooms)=>{
   return{
    type:FILTER_APARTMENTS,
    apartmentCity,
    apartmentDistrict,
    apartmentPrice,
    apartmentRooms
   } 
}

export const ADD_FAVORITE = "ADD_FAVORITE";
export const createAddFavorite = (apartment) => ({
  type: ADD_FAVORITE,
  apartment 
});

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const createRemoveFavorite = (apartmentId) => ({
  type: REMOVE_FAVORITE,
  apartmentId 
});

export const DELETE_ALL = "DELETE_ALL";
export const createDeleteFavorite = () => ({
  type: DELETE_ALL,
});
