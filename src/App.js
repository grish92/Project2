import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavbarContainer } from "./Components/Navbar/NavbarContainer";
import "antd/dist/antd.css";
import { ContentContainer } from "./Components/Content/ContentContainer";
import { Route } from "react-router";
import { FavoritesContainer } from "./Components/Favorites/FavoritesContainer";
import { SingleApartmentPageContainer } from "./Components/SingleApartmentPage/SingleApartmentPageContainer";
import { MyProfile } from "./Components/MyProfile/MyProfile";
import { AddAnnouncementContainer } from "./Components/AddAnnouncement/AddAnnouncementContainer";
import { UserAnnouncementContainer } from "./Components/UserAnnouncements/UserAnnouncementsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer />

        <div>
          <Route path="/home" render={() => <ContentContainer />} />
          <Route path="/favorites" render={() => <FavoritesContainer />} />
          <Route
            path="/apartment/:id"
            render={() => <SingleApartmentPageContainer />}
          />
          <Route path="/myprofile" render={() => <MyProfile />} />
          <Route
            path="/addAnnouncement"
            render={() => <AddAnnouncementContainer />}
          />
          <Route
            path="/userannouncements"
            render={() => <UserAnnouncementContainer />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
