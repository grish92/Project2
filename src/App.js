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
import { SingleApartmentPageContainer } from "./Components/SingleApartmentPage/SingleApartmentPageContainer";
import { MyProfile } from "./Components/MyProfile/MyProfile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer />
        {/* <ContentContainer /> */}
        <div>
        <Route path="/home"  render={()=><ContentContainer/>} />
      <Route path="/favorites" render={()=><FavoritesContainer/>} />
      <Route path="/apartment/:id" render={()=><SingleApartmentPageContainer/>} />
      <Route path="/myprofile" render={()=><MyProfile/>} />
        </div>
        {/* <HomeContent/> */}
        {/* <Routes/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
