import React from "react";
import { Route, BrowserRouter, withRouter, Redirect } from "react-router-dom";

import HeaderContainer from "../src/components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/LogIn";
import { initializatedApp } from "./redux/reducerApp";

import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { setUserData } from "./redux/reducerAuth";
import Preloader from "./components/common/preloader/Preloader";
import ProfileAPIContainer from "./components/Profile/ProfileAPIContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializatedApp();
  }
  // dev
  render() {
    if (!this.props.initializatedAppSuccessful) return <Preloader />;
    if (
      this.props.initializatedAppSuccessful &&
      this.props.location.pathname === "/login"
    )
      return <Redirect to={"/profile"} />;

    return (
      <BrowserRouter>
        <div className="main-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="main_content">
            <Route path="/profile/:userId?" component={Profile} />
            <Route path="/dialogs" component={DialogsContainer} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
            <Route path="/friends" component={ProfileAPIContainer} />
            <Route path="/find_users" component={FindUsersContainer} />
            <Route path="/login" component={LogIn} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initializatedAppSuccessful: state.app.initializatedAppSuccessful,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { initializatedApp, setUserData }),
  withRouter
)(App);
