import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {
  setUserProfile,
  getUserStatus,
  updateUserProfile,
  updateStatus,
} from "../../redux/reducerProfilePage";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../redux/authReducer";
import withAuthReducer from "../../hoc/withAuthReducer";
import { compose } from "redux";
import { uploadFile } from "../../redux/reducerProfilePage";

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
        uploadFile={this.props.uploadFile}
        isChangedPhoto={this.props.isChangedPhoto}
        status={this.props.status}
        updateUserProfile={this.props.updateUserProfile}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    isChangedPhoto: state.profilePage.isChangedPhoto,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getUserStatus,
    updateStatus,
    uploadFile,
    updateUserProfile,
  }),
  withAuthReducer,
  withRouter
)(ProfileAPIConteiner);
