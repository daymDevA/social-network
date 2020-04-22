import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import picture from "../../../assets/images/picture.jpg";
import {
  SaveButton,
  AvatarWrapperEditPencil,
  WrapperButtons,
} from "./StyledFormProfileInfo";

import { Avatar, UploaderFile, StyledIconUploadFile } from "../../../styles";
import {
  Info,
  InfoBlock,
  WrapperUserInfo,
  WrapperContacts,
} from "../ProfileInfo/StyledProfileInfo";
import CustomField from "../../common/CustomField/CustomField";
import { Form, Formik } from "formik";

const setInfoUser = (userProfile) => {
  return [
    {
      name: "fullName",
      value: userProfile.fullName,
      placeholder: "Name..",
      type: "text",
    },
    {
      name: "status",
      value: userProfile.status,
      placeholder: "Status..",
      type: "text",
    },
    {
      name: "aboutMe",
      value: userProfile.aboutMe,
      placeholder: "About Me..",
      type: "text",
    },
    {
      name: "lookingForAJob",
      value: userProfile.lookingForAJob,
      placeholder: "Looking for a job..",
      type: "checkbox",
    },
    {
      name: "lookingForAJobDescription",
      value: userProfile.lookingForAJobDescription,
      placeholder: "Looking for a job description..",
    },
  ];
};

const setInfoUserContacts = (contacts) => {
  return [
    {
      name: "youtube",
      value: contacts.youtube,
      placeholder: "YouTube..",
    },
    {
      name: "vk",
      value: contacts.vk,
      placeholder: "VK..",
    },
    {
      name: "twitter",
      value: contacts.twitter,
      placeholder: "Twitter..",
    },
    {
      name: "website",
      value: contacts.website,
      placeholder: "Web Side...",
    },
    {
      name: "instagram",
      value: contacts.instagram,
      placeholder: "Instagram...",
    },
    {
      name: "github",
      value: contacts.github,
      placeholder: "Github..",
    },
    {
      name: "mainLink",
      value: contacts.mainLink,
      placeholder: "MainLink..",
    },
  ];
};

const FormProfileInfo = ({
  save,
  status,
  userProfile,
  uploadFile,
  setIsClickedInfoBlockEditButton,
}) => {
  const choosePhoto = (e) => {
    uploadFile(e.target.files[0]);
  };

  return (
    <Formik
      initialValues={{
        aboutMe: userProfile.aboutMe || "",
        youtube: userProfile.contacts.youtube || "",
        vk: userProfile.contacts.vk || "",
        twitter: userProfile.contacts.twitter || "",
        instagram: userProfile.contacts.instagram || "",
        website: userProfile.contacts.website || "",
        github: userProfile.contacts.github || "",
        mainLink: userProfile.contacts.mainLink || "",
        lookingForAJob: userProfile.lookingForAJob || "",
        lookingForAJobDescription: userProfile.lookingForAJobDescription || "",
        fullName: userProfile.fullName || "",
        userId: userProfile.userId || "",
        status: status,
      }}
      onSubmit={(values, actions) => {
        const profile = {
          ...values,
          contacts: values,
          photos: { small: null, large: null },
        };

        save(profile, false);
      }}
    >
      {(props) => {
        return (
          <Form>
            <WrapperUserInfo>
              <Avatar
                onChange={choosePhoto}
                htmlFor="file-upload"
                style={{
                  backgroundImage: `url(${
                    userProfile.photos.small !== null
                      ? userProfile.photos.small
                      : ""
                  })`,
                }}
              >
                <StyledIconUploadFile>
                  <FontAwesomeIcon icon={faCloudUploadAlt} />
                </StyledIconUploadFile>

                <UploaderFile
                  type="file"
                  id="file-upload"
                  name="avatar"
                  accept="image/png, image/jpeg"
                />
              </Avatar>
              <InfoBlock>
                <Info>
                  {setInfoUser(props.values).map((item, index) => (
                    <CustomField
                      key={index}
                      name={item.name}
                      type={item.type}
                      value={item.value}
                      placeholder={item.placeholder}
                    />
                  ))}
                </Info>

                <WrapperContacts>
                  {setInfoUserContacts(props.values).map((item, index) => (
                    <CustomField
                      key={index}
                      name={item.name}
                      type={item.type}
                      value={item.value}
                      placeholder={item.placeholder}
                    />
                  ))}
                </WrapperContacts>

                <WrapperButtons>
                  <AvatarWrapperEditPencil>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </AvatarWrapperEditPencil>

                  <SaveButton type="submit">Save</SaveButton>
                  <SaveButton
                    onClick={() => setIsClickedInfoBlockEditButton(false)}
                  >
                    Cancel
                  </SaveButton>
                </WrapperButtons>
              </InfoBlock>
            </WrapperUserInfo>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormProfileInfo;
