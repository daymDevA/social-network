import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import {
  BackgroundWrapperEditPencil,
  WrapperBackgroundSaveButton,
  BackgroundSaveButton,
} from "../EditModeProfileInfo/StyledFormProfileInfo";
import picture from "../../../assets/images/picture.jpg";
import { BackgroundUser } from "../ProfileInfo/StyledProfileInfo";
const EditProfileBackground = ({
  save,
  setIsClickedBackgroundEditButton,

  isClickedBackgrundEditButton,
}) => {
  return (
    <div>
      <BackgroundUser
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <BackgroundWrapperEditPencil
          onClick={() => setIsClickedBackgroundEditButton(false)}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </BackgroundWrapperEditPencil>
      </BackgroundUser>
      <WrapperBackgroundSaveButton>
        <BackgroundSaveButton
          onClick={() => setIsClickedBackgroundEditButton(false)}
        >
          Save
        </BackgroundSaveButton>
      </WrapperBackgroundSaveButton>
    </div>
  );
};
export default EditProfileBackground;
