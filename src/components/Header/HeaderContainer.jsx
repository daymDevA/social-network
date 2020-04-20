import React from "react";
import { connect } from "react-redux";
import {
  setUserAuthData,
  logOut,
  setUserData,
  getDataUserId,
  getDataLogin,
  getDataIsAuth,
} from "../../redux/reducerAuth";
import {
  setUserProfile,
  getDataUserProfilePhotoLarge,
  getDataUserProfilePhotoSmall,
} from "../../redux/reducerProfilePage";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: getDataLogin(state),
    isAuth: getDataIsAuth(state),
    avatar: getDataUserProfilePhotoSmall(state) || "",
    backgroundLarge: getDataUserProfilePhotoLarge(state) || "",
    id: getDataUserId(state),
  };
};

export default connect(mapStateToProps, {
  setUserAuthData,
  setUserProfile,
  logOut,
  setUserData,
})(HeaderContainer);
