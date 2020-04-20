import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import picture from "../../../assets/images/picture.jpg";
import {
  UploaderFile,
  SaveButton,
  AvatarWrapperEditPencil,
  WrapperButtons,
} from "./StyledFormProfileInfo";
import { Avatar } from "../../../styles";
import {
  BackgroundUser,
  Info,
  InfoBlock,
  WrapperUserInfo,
  WrapperContacts,
} from "../ProfileInfo/StyledProfileInfo";
import CustomField from "../../common/CustomField/CustomField";
import { reduxForm, Field } from "redux-form";

const setProfile = (formData, id) => {
  return {
    aboutMe: formData.aboutMe,
    contacts: {
      skype: formData.skype,
      vk: formData.vk,
      facebook: formData.facebook,
      github: formData.github,
      twitter: formData.twitter,
      instagram: formData.instagram,
      mainLink: formData.mainLink,
      youtube: formData.youtube,
    },
    lookingForAJob: formData.lookingForAJob,
    lookingForAJobDescription: formData.lookingForAJobDescription,
    fullName: formData.name,
    userId: id,
  };
};

const EditProfileInfo = ({
  save,
  status,
  userProfile,
  changeTextStatus,
  handleSubmit,
}) => {
  const infoBlockFields = [
    {
      name: "name",
      value: userProfile.fullName,
      placeholder: "Name..",
    },
    {
      name: "status",
      value: "status",
      placeholder: "Status..",
    },
    {
      name: "aboutMe",
      value: userProfile.aboutMe,
      placeholder: "About Me..",
    },
    {
      name: "lookingForAJob",
      value: userProfile.lookingForAJob,
      placeholder: "Looking for a job..",
    },
    {
      name: "lookingForAJobDescription",
      value: userProfile.lookingForAJobDescription,
      placeholder: "Looking for a job description..",
    },
  ];

  console.log(infoBlockFields);

  return (
    <form
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <WrapperUserInfo>
        <Avatar
          htmlFor="file-upload"
          style={{
            backgroundImage: `url(${
              userProfile.photos.small !== null ? userProfile.photos.small : ""
            })`,
          }}
        >
          <div>
            <FontAwesomeIcon icon={faCloudUploadAlt} />
          </div>
          <UploaderFile
            type="file"
            id="file-upload"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </Avatar>
        <AvatarWrapperEditPencil>
          <FontAwesomeIcon icon={faPencilAlt} />
        </AvatarWrapperEditPencil>

        <InfoBlock>
          <Info>
            {infoBlockFields.map((item, index) => (
              <Field
                key={index}
                name={item.name}
                changeTextStatus={item.name === status ? changeTextStatus : ""}
                component={CustomField}
                value={"item.value"}
                placeholder={item.placeholder}
              />
            ))}
          </Info>

          <WrapperContacts>
            {Object.keys(userProfile.contacts).map((item, index) => (
              <Field
                key={item}
                name={item}
                component={CustomField}
                placeholder={`${item}..`}
                value={userProfile.contacts[item]}
              />
            ))}
          </WrapperContacts>

          <WrapperButtons>
            <SaveButton>Save</SaveButton>
            <SaveButton>Cancel</SaveButton>
          </WrapperButtons>
        </InfoBlock>
      </WrapperUserInfo>
    </form>
  );
};

const EditFormProfileInfo = reduxForm({ form: "EditProfileInfo" })(
  EditProfileInfo
);

const FormProfileInfo = ({ save, status, userProfile, changeTextStatus }) => {
  const onSubmit = (formData) => {
    save("", false);
  };

  return (
    <EditFormProfileInfo
      onSubmit={onSubmit}
      status={status}
      userProfile={userProfile}
      changeTextStatus={changeTextStatus}
    />
  );
};

export default FormProfileInfo;
