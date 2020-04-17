import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import ProfileInfoHook from "./ProfileInfo/ProfileInfoHook";
import withAuthReducer from "../../hoc/withAuthReducer";

import {
  setUserProfile,
  getUserStatus,
  getDataStatus,
  getDataUserProfile,
  updateStatus,
} from "../../redux/reducerProfilePage";
import { getProfile, getDataUserId } from "../../redux/reducerAuth";

class ProfileAPIContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;

      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <ProfileInfoHook
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
    userProfile: getDataUserProfile(state),
    id: getDataUserId(state),
    status: getDataStatus(state),
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
)(ProfileAPIContainer);
