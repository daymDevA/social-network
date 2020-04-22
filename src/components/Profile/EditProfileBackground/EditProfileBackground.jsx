import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPencilAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  BackgroundWrapperEditPencil,
  WrapperBackgroundSaveButton,
  StyledIconBackgroundPhoto,
  BackgroundSaveButton,
} from "../EditModeProfileInfo/StyledFormProfileInfo";
import { BackgroundUser } from "../ProfileInfo/StyledProfileInfo";
import { UploaderFile } from "../../../styles";

const EditProfileBackground = ({
  save,
  setIsClickedBackgroundEditButton,
  photo,
  uploadFile,
}) => {
  const [backgroundPhoto, setBackgroundPhoto] = useState(photo);
  console.log(photo);
  useEffect(() => {
    setBackgroundPhoto(photo);
  }, [photo]);

  const choosePhoto = (e) => {
    uploadFile(e.target.files[0]);
  };

  return (
    <div>
      <BackgroundUser
        style={{
          backgroundImage: `url(${backgroundPhoto})`,
        }}
        onChange={choosePhoto}
        htmlFor="file-upload-bg"
      >
        <StyledIconBackgroundPhoto>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
        </StyledIconBackgroundPhoto>

        <UploaderFile
          type="file"
          id="file-upload-bg"
          name="backgroundPhoto"
          accept="image/png, image/jpeg"
        />

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
        <BackgroundSaveButton
          onClick={() => setIsClickedBackgroundEditButton(false)}
        >
          Cancel
        </BackgroundSaveButton>
      </WrapperBackgroundSaveButton>
    </div>
  );
};
export default EditProfileBackground;
