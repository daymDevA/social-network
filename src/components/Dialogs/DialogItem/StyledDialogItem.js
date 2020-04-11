import styled from "styled-components";

export const DialogsItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
`;

export const DonotReadMessages = styled.div`
  align-self: center;
  text-align: center;
  width: 23px;
  height: 20px;

  padding-top: 3px;
  font-size: 12px;
  border-radius: 50%;
  background: #cacaca;
  color: white;
  display: block;
  margin: 0 auto;
  margin-top: 4px;
`;

export const ActiveDialogItem = styled(DialogsItem)`
  ${DonotReadMessages} {
    background: white;
    color: #6f9dea;
  }
`;

export const StyledData = styled.span`
  color: #b2b2b3;
  font-size: 12px;
  display: block;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperName = styled(StyledWrapper)`
  justify-content: space-between;
  padding: 5px;
  span:first-child {
    color: #6f9dea;
    font-size: 16px;
  }
`;

export const WrapperMessagePreview = styled(StyledWrapper)`
  p {
    font-size: 14px;
    color: #95959a;
    width: 190px;
    padding: 5px 10px;
    overflow: hidden;
    margin: 5px 20px 5px 10px;
    white-space: nowrap;
  }
`;

export const WrapperImg = styled.div`
  width: 50px;
  margin: 0 10px 0 0;
  flex-grow: 0;
  text-align: center;
  justify-self: center;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 5px;
    display: block;
  }
`;
