import { connect } from "react-redux";
import { withRouter } from "react-router";
import { SingleApartmentPage } from "./SingleApartmentPage";

let mapStateToProps = (state) => {
  return {
    columns: state.SingleApartment.columns,
    apartments: state.Content.apartmentsAll,
  };
};
const withRouterContainer = withRouter(SingleApartmentPage);
export const SingleApartmentPageContainer =
  connect(mapStateToProps)(withRouterContainer);
