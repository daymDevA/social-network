import styled from "styled-components";
import { StyledIconUploadFile } from "../../../styles";

export const Button = styled.button`
  display: block;
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 7px;
  box-sizing: border-box;
  color: white;
  background: #6f9dea;
`;

export const WrapperEditPencil = styled.div`
  font-size: 18px;
  position: absolute;
  width: 30px;
  color: #6f9dea;
  height: 30px;
`;

export const BackgroundWrapperEditPencil = styled(WrapperEditPencil)`
  left: calc(985px - 40px);
  top: 5px;
`;

export const InfoBlockWrapperEditPencil = styled(WrapperEditPencil)`
  justify-self: flex-end;
  left: calc(100px - 40px);
`;

export const AvatarWrapperEditPencil = styled(WrapperEditPencil)`
  left: calc(150px - 40px);
  margin-top: 5px;
  box-sizing: border-box;
`;

export const SaveButton = styled(Button)`
  align-self: flex-end;
  padding: 0px 5px;
  margin-right: 20px;
`;

export const BackgroundSaveButton = styled(SaveButton)`
  display: block;
  top: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const WrapperBackgroundSaveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const WrapperButtons = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

export const StyledIconBackgroundPhoto = styled(StyledIconUploadFile)`
  top: calc(50% - 50px);
  cursor: pointer;
  position: relative;
  font-size: 60px;
`;
