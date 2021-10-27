import { combineReducers, createStore } from "redux";
import { ContentReducer } from "./Reducers/ContentReducer";
import { NavbarReducer } from "./Reducers/NavbarReducer";
import { SingleApartmentReducer } from "./Reducers/SingleApartmentReducer";



const reducers = combineReducers({
    Navbar:NavbarReducer,
    Content:ContentReducer,
    SingleApartment:SingleApartmentReducer
  });

  let store= createStore(
    reducers
  );
  export default store