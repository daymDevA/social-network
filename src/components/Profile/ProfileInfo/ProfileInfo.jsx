import React from "react";
import backgroundLarge from "../../../assets/images/backgroundLarge.jpg";
import men from "../../../assets/images/men.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditProfileBackground from "../EditProfileBackground/EditProfileBackground";
import EditModeProfileInfo from "../EditModeProfileInfo/EditModeProfileInfo";
import {
  BackgroundWrapperEditPencil,
  WrapperButtons,
  InfoBlockWrapperEditPencil,
} from "../EditModeProfileInfo/StyledEditModeProfileInfo";
import {
  BackgroundUser,
  Info,
  InfoBlock,
  WrapperUserInfo,
  Avatar,
  WrapperContacts,
} from "./StyledProfileInfo";

class ProfileInfo extends React.Component {
  state = {
    isShowBackgroundPen: false,
    isShowInfoBlock: false,
    isClickBackgroundPen: false,
    status: "",
    isClickInfoBlockPen: false,
  };

  changeTextStatus(value) {
    this.setState({ status: value });
  }

  onHover() {
    this.state.isShowBackgroundPen
      ? this.setState({ isShowBackgroundPen: false })
      : this.setState({ isShowBackgroundPen: true });
  }

  onHoverInfoBlock() {
    this.state.isShowInfoBlock
      ? this.setState({ isShowInfoBlock: false })
      : this.setState({ isShowInfoBlock: true });
  }

  onClickBcgPen() {
    if (!this.state.isClickBackgroundPen) {
      this.setState({ isClickBackgroundPen: true });
    } else {
      this.setState({ isClickBackgroundPen: false });
      this.setState({ isShowBackgroundPen: false });
    }
  }

  saveNewBackgroundImg() {
    this.setState({ isClickBackgroundPen: false });
  }

  saveInfo() {
    this.props.updateStatus(this.props.userProfile.userId, this.state.status);
    this.setState({ isClickInfoBlockPen: false });
    this.setState({ isShowInfoBlock: false });
  }

  onClickInfoBlockPen() {
    if (this.state.isClickInfoBlockPen) {
      this.setState({ isClickInfoBlockPen: false });
    } else {
      this.setState({ isClickInfoBlockPen: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    const { userProfile } = this.props;

    return (
      <>
        {this.state.isClickBackgroundPen ? (
          <EditProfileBackground save={this.onClickBcgPen.bind(this)} />
        ) : (
          <BackgroundUser
            onMouseEnter={this.onHover.bind(this)}
            onMouseLeave={this.onHover.bind(this)}
            style={{
              backgroundImage: `url(${
                userProfile.photos.large !== null
                  ? userProfile.photos.large
                  : backgroundLarge
              })`,
            }}
          >
            {this.state.isShowBackgroundPen ? (
              <BackgroundWrapperEditPencil
                onClick={this.onClickBcgPen.bind(this)}
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </BackgroundWrapperEditPencil>
            ) : (
              ""
            )}
          </BackgroundUser>
        )}
        {this.state.isClickInfoBlockPen ? (
          <EditModeProfileInfo
            save={this.saveInfo.bind(this)}
            status={this.state.status}
            userProfile={userProfile}
            changeTextStatus={this.changeTextStatus.bind(this)}
          />
        ) : (
          <WrapperUserInfo
            onMouseEnter={this.onHoverInfoBlock.bind(this)}
            onMouseLeave={this.onHoverInfoBlock.bind(this)}
          >
            <Avatar
              style={{
                backgroundImage: `url(${
                  userProfile.photos.small !== null
                    ? userProfile.photos.small
                    : men
                })`,
              }}
            ></Avatar>

            <InfoBlock>
              <Info>
                <label htmlFor="">Name: {userProfile.fullName}</label>
                <label htmlFor="">Status: {this.state.status}</label>
                <label htmlFor="">About Me: {userProfile.aboutMe}</label>
                <label htmlFor="">
                  Looking for a job: {userProfile.lookingForAJob ? `Yes` : `No`}
                </label>
                <label htmlFor="">
                  Looking for a job description:
                  {userProfile.lookingForAJobDescription}
                </label>
              </Info>

              <WrapperContacts>
                <label htmlFor="">
                  Youtube: {userProfile.contacts.youtube}
                </label>
                <label htmlFor="">VK: {userProfile.contacts.vk}</label>
                <label htmlFor="">
                  Twitter: {userProfile.contacts.twitter}
                </label>
                <label htmlFor="">
                  Instagram: {userProfile.contacts.instagram}
                </label>
                <label htmlFor="">
                  Web Side: {userProfile.contacts.website}
                </label>
                <label htmlFor="">Github: {userProfile.contacts.github}</label>
                <label htmlFor="">
                  MainLink: {userProfile.contacts.mainLink}
                </label>
              </WrapperContacts>
              {this.state.isShowInfoBlock ? (
                <WrapperButtons>
                  <InfoBlockWrapperEditPencil
                    onClick={this.onClickInfoBlockPen.bind(this)}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </InfoBlockWrapperEditPencil>
                </WrapperButtons>
              ) : (
                ""
              )}
            </InfoBlock>
          </WrapperUserInfo>
        )}
      </>
    );
  }
}

export default ProfileInfo;
