import styled from "styled-components";

export const BackgroundUser = styled.div`
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid #d7d7db;
  border-radius: 15px;
  background-position: bottom;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrapperUserInfo = styled.section`
  display: grid;
  grid-template-columns: minmax(100px, 150px) 1fr;
  align-items: start;
  grid-gap: 20px;
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 300px) minmax(150px, 300px) 180px;
  grid-gap: 2vw;
`;

export const Info = styled.div`
  margin-right: 20px;
  div {
    align-self: flex-start;
  }
  label {
    display: block;
    margin: 5px;
  }
  label:first-child {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const WrapperContacts = styled.div`
  label {
    display: block;
    margin: 5px;
  }
`;
