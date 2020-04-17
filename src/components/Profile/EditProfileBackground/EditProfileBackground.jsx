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
const EditProfileBackground = ({
  save,
  setIsClickedBackgrundEditButton,
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
          onClick={() => setIsClickedBackgrundEditButton(false)}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </BackgroundWrapperEditPencil>
      </BackgroundUser>
      <WrapperBackgroundSaveButton>
        <BackgroundSaveButton onClick={() => save(false)}>
          Save
        </BackgroundSaveButton>
      </WrapperBackgroundSaveButton>
    </div>
  );
};
export default EditProfileBackground;
