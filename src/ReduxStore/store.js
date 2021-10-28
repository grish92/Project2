import { combineReducers, createStore } from "redux";
import { AddAnnouncementReducer } from "./Reducers/AnnouncementReducer";
import { ContentReducer } from "./Reducers/ContentReducer";
import { NavbarReducer } from "./Reducers/NavbarReducer";
import { SingleApartmentReducer } from "./Reducers/SingleApartmentReducer";

const reducers = combineReducers({
  Navbar: NavbarReducer,
  Content: ContentReducer,
  SingleApartment: SingleApartmentReducer,
  Announcement: AddAnnouncementReducer,
});

let store = createStore(reducers);
export default store;
