import styled from "styled-components";

export const WrapperDialogSection = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 1fr !important;
  max-height: calc(100vh - 80px);
  * {
    text-decoration: none !important;
  }
`;

export const WrapperChatsSection = styled.section`
  border-left: 2px solid #e7e7ec;
  height: calc(100vh - (80px + 150px));
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const WrapperPost = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-gap: 10px;
  form {
    display: block;
    width: 100%;

    textarea {
      min-height: 40px;
      display: block;
      text-align: start;
      color: #929292;
      padding: 10px;
      width: 97%;
      background: #f0f0f0;
      margin-bottom: 10px;
      border-radius: 10px;
      border: none;
    }
  }
`;

export const Textarea = styled.textarea`
  min-height: 40px;
  display: block;
  text-align: start;
  color: #929292;
  padding: 10px;
  background: #f0f0f0;
  border-radius: 10px;
  border: none;
`;

export const Button = styled.button`
  display: block;
  float: right;
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 7px;
  background: #6f9dea;
  justify-self: end;
  color: white;
  background: #6f9dea;
`;
