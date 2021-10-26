// import { useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { NavBar } from './Components/Navbar';
import { NavbarContainer } from "./Components/Navbar/NavbarContainer";
// import { LoginRoutes } from './Routes/LoginRoutes';

import "antd/dist/antd.css";
// import { Content } from "./Components/Content/Content";
import {ContentContainer} from "./Components/Content/ContentContainer";
import { Route } from "react-router";

import { FavoritesContainer } from "./Components/Favorites/FavoritesContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer />
        {/* <ContentContainer /> */}
        <div>
        <Route path="/home"  render={()=><ContentContainer/>} />
      <Route path="/favorites" render={()=><FavoritesContainer/>} />
        </div>
        {/* <HomeContent/> */}
        {/* <Routes/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
