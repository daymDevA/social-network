import React, { useState, useEffect } from "react";

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
  photos,
  isChangedPhoto,
  WrapperUserInfo,
  WrapperContacts,
} from "./StyledProfileInfo";
import FormProfileInfo from "../EditModeProfileInfo/FormProfileInfo";
import { Avatar } from "../../../styles";

const setInfoBlock = (info, userStatus) => {
  return [
    { context: "Name:", value: info.fullName },
    { context: "Status:", value: userStatus },
    { context: "About Me:", value: info.aboutMe },
    {
      context: " Looking for a job:",
      value: info.lookingForAJob ? `Yes` : `No`,
    },
    {
      context: " Looking for a job description:",
      value: info.lookingForAJobDescription,
    },
  ];
};

const setContacts = (contacts) => {
  return [
    {
      value: contacts.youtube,
      context: "YouTube:",
    },
    {
      value: contacts.vk,
      context: "VK:",
    },
    {
      value: contacts.twitter,
      context: "Twitter:",
    },
    {
      value: contacts.website,
      context: "Web Side:",
    },
    {
      value: contacts.instagram,
      placeholder: "Instagram:",
    },
    {
      value: contacts.github,
      context: "Github:",
    },
    {
      value: contacts.mainLink,
      context: "MainLink:",
    },
  ];
};

const getData = (array) => {
  const newArray = array.map((item, index) => {
    return (
      <label key={index} htmlFor="">{`${item.context} ${item.value}`}</label>
    );
  });
  return newArray;
};

const ProfileInfo = ({
  userProfile,
  status,
  isChangedPhoto,
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
          photo={userProfile.photos.large}
          uploadFile={uploadFile}
          isChangedPhoto={isChangedPhoto}
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
                : ""
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
          photo={userProfile.photos.small}
          uploadFile={uploadFile}
          setIsClickedInfoBlockEditButton={setIsClickedInfoBlockEditButton}
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
                  : ""
              })`,
            }}
          ></Avatar>

          <InfoBlock>
            <Info>{getData(setInfoBlock(infoProfile, status))}</Info>

            <WrapperContacts>
              {getData(setContacts(infoProfile.contacts))}
            </WrapperContacts>
            {isShowInfoBlockEditButton ? (
              <WrapperButtons>
                <InfoBlockWrapperEditPencil
                  onClick={() => setIsClickedInfoBlockEditButton(true)}
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

export default ProfileInfo;
