import React from "react";
import { connect } from "react-redux";
import { setUserAuthData, setUserData } from "../../redux/authReducer";
import { setUserProfile } from "../../redux/reducerProfilePage";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUserData(this.props.id);
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    avatar: state.profilePage.userProfile.photos.small,
    backgroundLarge: state.profilePage.userProfile.photos.large,
    id: state.auth.id,
  };
};

export default connect(mapStateToProps, {
  setUserAuthData,
  setUserProfile,
  setUserData,
})(HeaderContainer);
