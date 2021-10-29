import { combineReducers, createStore } from "redux";
import { AddAnnouncementReducer } from "./Reducers/AnnouncementReducer";
import { ContentReducer } from "./Reducers/ContentReducer";
import { NavbarReducer } from "./Reducers/NavbarReducer";
import { SingleApartmentReducer } from "./Reducers/SingleApartmentReducer";
import { TokenReducer } from "./Reducers/TokenReducer";
import { UserReducer } from "./Reducers/UserReducer";

const reducers = combineReducers({
  Navbar: NavbarReducer,
  Content: ContentReducer,
  SingleApartment: SingleApartmentReducer,
  Announcement: AddAnnouncementReducer,
  token: TokenReducer,
  user: UserReducer
});

let store = createStore(reducers);
export default store;
