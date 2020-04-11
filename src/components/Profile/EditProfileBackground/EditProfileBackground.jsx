import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import {
  BackgroundWrapperEditPencil,
  WrapperBackgroundSaveButton,
  BackgroundSaveButton,
} from "../EditModeProfileInfo/StyledEditModeProfileInfo";
import picture from "../../../assets/images/picture.jpg";
import { BackgroundUser } from "../ProfileInfo/StyledProfileInfo";
const EditProfileBackground = ({ save }) => {
  return (
    <div>
      <BackgroundUser
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <BackgroundWrapperEditPencil>
          <FontAwesomeIcon icon={faPencilAlt} />
        </BackgroundWrapperEditPencil>
      </BackgroundUser>
      <WrapperBackgroundSaveButton>
        <BackgroundSaveButton onClick={save}>Save</BackgroundSaveButton>
      </WrapperBackgroundSaveButton>
    </div>
  );
};
export default EditProfileBackground;
