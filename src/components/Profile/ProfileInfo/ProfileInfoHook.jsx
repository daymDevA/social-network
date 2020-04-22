import React, { useState, useEffect } from "react";
import backgroundLarge from "../../../assets/images/backgroundLarge.jpg";
import men from "../../../assets/images/men.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditProfileBackground from "../EditProfileBackground/EditProfileBackground";
import {
  BackgroundWrapperEditPencil,
  WrapperButtons,
  InfoBlockWrapperEditPencil,
} from "../EditModeProfileInfo/StyledFormProfileInfo";
import {
  BackgroundUser,
  Info,
  InfoBlock,
  WrapperUserInfo,
  WrapperContacts,
} from "./StyledProfileInfo";
import FormProfileInfo from "../EditModeProfileInfo/FormProfileInfo";
import { Avatar } from "../../../styles";

const ProfileInfoHook = ({
  userProfile,
  status,
  uploadFile,
  updateStatus,
  updateUserProfile,
}) => {
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

  const [userStatus, setUserStatus] = useState(status);

  useEffect(() => {
    setUserStatus(status);
    setInfoProfile(userProfile);
  }, [status, userProfile]);

  const saveChangedInfoBlock = (profile, flag) => {
    updateStatus(infoProfile.userId, profile.status);
    updateUserProfile(profile);

    setIsClickedInfoBlockEditButton(flag);
  };

  return (
    <>
      {isClickedBackgroundEditButton ? (
        <EditProfileBackground
          setIsClickedBackgroundEditButton={setIsClickedBackgroundEditButton}
          // save={setIsClickedBackgroundEditButton}
          uploadFile={uploadFile}
        />
      ) : (
        <BackgroundUser
          onMouseEnter={() => setIsShowBackgroundEditButton(true)}
          onMouseLeave={() => setIsShowBackgroundEditButton(false)}
          style={{
            backgroundImage: `url(${
              infoProfile.photos.large !== null &&
              infoProfile.photos.large !== ""
                ? infoProfile.photos.large
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
        <FormProfileInfo
          save={saveChangedInfoBlock}
          userProfile={userProfile}
          status={userStatus}
          uploadFile={uploadFile}
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
              <label htmlFor="">Status: {userStatus}</label>
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
                <InfoBlockWrapperEditPencil
                  onClick={setIsClickedInfoBlockEditButton}
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
};

export default React.memo(ProfileInfoHook);
