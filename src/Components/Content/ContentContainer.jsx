import { connect } from "react-redux";
import { HomeContent } from "./HomeContent";
import {
  createAddFavorite,
  createDeleteFavorite,
  createRemoveFavorite,
} from "../../ReduxStore/action";

let mapStateToProps = (state) => {
    console.log(state)
  return {
    apartments: state.Content.apartmentsAll,
    favoritesList: state.Content.favoritList,
    priceFilterMap:state.Content.priceFilterMap,
    filteredApartment:state.Content.filteredApartment

  };
};

let mapDispatchToProps = (dispatch) => {
  return {
      
    addFavorite: (apartment) => {
      dispatch(createAddFavorite(apartment));
    },
    removeFavorite: (apartmentId) => {
      dispatch(createRemoveFavorite(apartmentId));
    },
    removeAll: () => {
      dispatch(createDeleteFavorite());
    },
  };
};

export const ContentContainer= connect(
    mapStateToProps,
  mapDispatchToProps
)(HomeContent);
// export default ContentContainer