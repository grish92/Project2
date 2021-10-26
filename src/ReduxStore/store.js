import { combineReducers, createStore } from "redux";
import { ContentReducer } from "./Reducers/ContentReducer";
import { NavbarReducer } from "./Reducers/NavbarReducer";



const reducers = combineReducers({
    Navbar:NavbarReducer,
    Content:ContentReducer
  });

  let store= createStore(
    reducers
  );
  export default store