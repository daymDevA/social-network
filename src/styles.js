import styled from "styled-components";

export const Avatar = styled.label`
  display: inline-block;
  height: 180px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  border: 1px solid #d7d7db;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 15px;
  div {
    align-self: center;
    font-size: 41px;
    color: #d7d7db;
    margin-left: calc(50% - 25px);
    justify-self: center;
  }
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
