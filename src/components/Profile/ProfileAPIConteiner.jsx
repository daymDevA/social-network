import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {
  setUserProfile,
  getUserStatus,
  updateStatus,
} from "../../redux/reducerProfilePage";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../redux/authReducer";
import withAuthReducer from "../../hoc/WithAuthReducer";
import { compose } from "redux";

class ProfileAPIConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (userId === undefined) {
      userId = 6771;
    }

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <ProfileInfo
        userProfile={this.props.userProfile}
        userId={this.props.userId}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getUserStatus,
    updateStatus,
  }),
  withAuthReducer,
  withRouter
)(ProfileAPIConteiner);
