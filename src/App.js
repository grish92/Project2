// import { useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { NavBar } from './Components/Navbar';
import { NavbarContainer } from "./Components/Navbar/NavbarContainer";
// import { LoginRoutes } from './Routes/LoginRoutes';
import { Routes } from './Routes/Routes';
import "antd/dist/antd.css";
// import { Content } from "./Components/Content/Content";
import {ContentContainer} from "./Components/Content/ContentContainer";
import { HomeContent } from "./Components/Content/HomeContent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer />
        <ContentContainer />
        <HomeContent/>
        <Routes/>
      </div>
    </BrowserRouter>
  );
};

export default App;
