import { connect } from "react-redux";
import { Favorites } from "./Favorites";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    favorites: state.Content.favoritList,
  };
};

export const FavoritesContainer = connect(mapStateToProps)(Favorites);
