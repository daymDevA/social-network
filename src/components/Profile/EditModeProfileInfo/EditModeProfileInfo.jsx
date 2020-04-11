import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import picture from "../../../assets/images/picture.jpg";
import {
  Input,
  SaveButton,
  AvatarWrapperEditPencil,
  WrapperButtons,
} from "./StyledEditModeProfileInfo";
import {
  BackgroundUser,
  Info,
  InfoBlock,
  WrapperUserInfo,
  Avatar,
  WrapperContacts,
} from "../ProfileInfo/StyledProfileInfo";
const EditModeProfileInfo = ({
  save,
  status,
  userProfile,
  changeTextStatus,
}) => {
  const onChangeInput = (e, type) => {
    switch (type) {
      case "status":
        changeTextStatus(e.target.value);
        break;
      case "name":
        changeTextStatus(e.target.value);
        break;
      case "aboutMe":
        changeTextStatus(e.target.value);
        break;
      case "lookingJob":
        changeTextStatus(e.target.value);
        break;
      case "lookingJobDes":
        changeTextStatus(e.target.value);
        break;
      case "youtube":
        changeTextStatus(e.target.value);
        break;
      case "vk":
        changeTextStatus(e.target.value);
        break;
      case "twitter":
        changeTextStatus(e.target.value);
        break;
      case "instargam":
        changeTextStatus(e.target.value);
        break;
      case "website":
        changeTextStatus(e.target.value);
        break;
      case "github":
        changeTextStatus(e.target.value);
        break;
      case "mainLink":
        changeTextStatus(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <WrapperUserInfo>
        <Avatar
          style={{
            backgroundImage: `url(${picture})`,
          }}
        >
          <AvatarWrapperEditPencil>
            <FontAwesomeIcon icon={faPencilAlt} />
          </AvatarWrapperEditPencil>
        </Avatar>

        <InfoBlock>
          <Info>
            <Input
              onChange={(e) => {
                onChangeInput(e, "name");
              }}
              type="text"
              placeholder="Name.."
              value={userProfile.fullName}
            />
            <Input
              type="text"
              placeholder="Status.."
              defaultValue={status}
              onChange={(e) => {
                onChangeInput(e, "status");
              }}
            />
            <Input
              type="text"
              placeholder="About Me.."
              onChange={(e) => {
                onChangeInput(e, "aboutMe");
              }}
              defaultValue={userProfile.aboutMe}
            />
            <Input
              type="text"
              placeholder="Looking for a job.."
              onChange={(e) => {
                onChangeInput(e, "lookingJob");
              }}
              defaultValue={userProfile.lookingForAJob}
            />
            <Input
              type="text"
              placeholder="Looking for a job description.."
              onChange={(e) => {
                onChangeInput(e, "lookingJobDes");
              }}
              defaultValue={userProfile.lookingForAJobDescription}
            />
          </Info>

          <WrapperContacts>
            <Input
              type="text"
              placeholder="Youtube link.."
              onChange={(e) => {
                onChangeInput(e, "youtube");
              }}
              defaultValue={userProfile.contacts.youtube}
            />
            <Input
              type="text"
              placeholder="VK link.."
              onChange={(e) => {
                onChangeInput(e, "vk");
              }}
              defaultValue={userProfile.contacts.vk}
            />
            <Input
              type="text"
              placeholder="Twitter link.."
              onChange={(e) => {
                onChangeInput(e, "twitter");
              }}
              defaultValue={userProfile.contacts.twitter}
            />
            <Input
              type="text"
              placeholder="Instagram link.."
              onChange={(e) => {
                onChangeInput(e, "instargam");
              }}
              defaultValue={userProfile.contacts.instagram}
            />
            <Input
              type="text"
              placeholder="Web Side link.."
              onChange={(e) => {
                onChangeInput(e, "website");
              }}
              defaultValue={userProfile.contacts.website}
            />
            <Input
              type="text"
              placeholder="Github link.."
              onChange={(e) => {
                onChangeInput(e, "github");
              }}
              defaultValue={userProfile.contacts.github}
            />
            <Input
              type="text"
              placeholder="MainLink link.."
              onChange={(e) => {
                onChangeInput(e, "mainLink");
              }}
              defaultValue={userProfile.contacts.mainLink}
            />
          </WrapperContacts>
          <WrapperButtons>
            <SaveButton onClick={save}>Save</SaveButton>
          </WrapperButtons>
        </InfoBlock>
      </WrapperUserInfo>
    </>
  );
};

export default EditModeProfileInfo;
