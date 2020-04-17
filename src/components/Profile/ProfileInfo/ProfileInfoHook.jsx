import React, { useState, useEffect } from "react";
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

const ProfileInfoHook = ({ userProfile, userStatus, updateStatus }) => {
  const [isShowBackgroundEditButton, setIsShowBackgroundEditButton] = useState(
    false
  );

  const [infoProfile, setInfoProfile] = useState(userProfile);

  const [
    isClickedBackgroundEditButton,
    setIsClickedBackgroundEditButton,
  ] = useState(false);

  const [isShowInfoBlockEditButton, setIsShowInfoBlockEditButton] = useState(
    false
  );

  const [
    isClickedInfoBlockEditButton,
    setIsClickedInfoBlockEditButton,
  ] = useState(false);

  const [status, setStatus] = useState(userStatus);

  useEffect(() => {
    setStatus(userStatus);
    setInfoProfile(userProfile);
  }, [userStatus, userProfile]);

  const changeTextStatus = (value) => {
    setStatus(value);
  };

  const saveChangedByInfoBlock = () => {
    updateStatus(userProfile.userId, status);
    setIsClickedInfoBlockEditButton(true);
  };

  return (
    <>
      {isClickedBackgroundEditButton ? (
        <EditProfileBackground
          isClickedBackgrundEditButton={isClickedBackgroundEditButton}
          save={setIsClickedBackgroundEditButton}
        />
      ) : (
        <BackgroundUser
          onMouseEnter={() => setIsShowBackgroundEditButton(true)}
          onMouseLeave={() => setIsShowBackgroundEditButton(false)}
          style={{
            backgroundImage: `url(${
              userProfile.photos.large !== null
                ? userProfile.photos.large
                : backgroundLarge
            })`,
          }}
        >
          {isShowBackgroundEditButton ? (
            <BackgroundWrapperEditPencil
              onClick={() =>
                isClickedBackgroundEditButton
                  ? setIsClickedBackgroundEditButton(false)
                  : setIsClickedBackgroundEditButton(true)
              }
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </BackgroundWrapperEditPencil>
          ) : (
            ""
          )}
        </BackgroundUser>
      )}
      {isClickedInfoBlockEditButton ? (
        <EditModeProfileInfo
          save={setIsClickedInfoBlockEditButton}
          userProfile={userProfile}
          changeTextStatus={changeTextStatus}
        />
      ) : (
        <WrapperUserInfo
          onMouseEnter={() => setIsShowInfoBlockEditButton(true)}
          onMouseLeave={() => setIsShowInfoBlockEditButton(false)}
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
              <label htmlFor="">Status: {status}</label>
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
              <label htmlFor="">Youtube: {userProfile.contacts.youtube}</label>
              <label htmlFor="">VK: {userProfile.contacts.vk}</label>
              <label htmlFor="">Twitter: {userProfile.contacts.twitter}</label>
              <label htmlFor="">
                Instagram: {userProfile.contacts.instagram}
              </label>
              <label htmlFor="">Web Side: {userProfile.contacts.website}</label>
              <label htmlFor="">Github: {userProfile.contacts.github}</label>
              <label htmlFor="">
                MainLink: {userProfile.contacts.mainLink}
              </label>
            </WrapperContacts>
            {isShowInfoBlockEditButton ? (
              <WrapperButtons>
                <InfoBlockWrapperEditPencil onClick={saveChangedByInfoBlock}>
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
};

export default React.memo(ProfileInfoHook);
