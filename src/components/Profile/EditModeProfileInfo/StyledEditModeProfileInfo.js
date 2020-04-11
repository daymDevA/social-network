import styled from "styled-components";

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
`;

export const BackgroundSaveButton = styled(SaveButton)`
  display: block;
  top: 5px;
  margin-bottom: 20px;
`;

export const WrapperBackgroundSaveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Input = styled.input`
  display: block;
  top: 0;
  margin-bottom: 10px;
  border: none;
  border: 1px solid #d7d7db;
  box-sizing: border-box;
  height: 35px;
  padding-left: 20px;
  border-radius: 10px;
  width: 100%;
  color: #6b6b6b;
  position: relative;
`;

export const WrapperButtons = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;
