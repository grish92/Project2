import { connect } from "react-redux";

import { SearchSort } from "./SearchSort";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    city: state.Content.City,
    district: state.Content.district,
    rooms: state.Content.rooms,
    priceFilterMap: state.Content.priceFilterMap,
    apartments: state.Content.apartmentsAll,
    filteredApartment: state.Content.filteredApartment,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export const SearchSortContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSort);
