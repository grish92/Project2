import { Route, Switch } from "react-router";
import {ContentContainer} from "../Components/Content/ContentContainer";

import { Favorites } from "../Components/Favorites/Favorites";

// import { Home } from "../components/Pages/Home";
// import SingleAppartmentPage from "../components/Pages/SingleAppartmentPage";
// import { MyProfile } from "../components/Pages/MyProfile";
// import { Notification } from "../components/Pages/Notification";
// import { Favorites } from "../components/Pages/Favorites";
// import { UserMaintenance } from "../components/Pages/UserMaintenance";


export const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/"  component={ContentContainer} exact /> */}
      {/* <Route path="/home"  component={ContentContainer} />
      <Route path="/favorites" component={Favorites} /> */}
      {/* <Route path="/apartment/:id" component={SingleAppartmentPage} />
      <Route path="/myprofile" component={MyProfile} />
      
      <Route path="/notifications" component={Notification} />
      <Route path="/userMaintenance" component={UserMaintenance} /> */}
    </Switch>
  );
};