import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HeaderContainer from "../src/components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/LogIn";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="main_content">
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => {}} />
          <Route path="/find_users" render={() => <FindUsersContainer />} />
          <Route path="/login" render={() => <LogIn />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
