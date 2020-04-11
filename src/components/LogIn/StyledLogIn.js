import styled from "styled-components";

export const WrapperLogIn = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: row;
`;

export const WrappperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0px 0px 20px 0px;
  text-align: center;
  color: #6b6b6b;
  display: block;
`;

export const FormLogin = styled.form`
  border-radius: 20px;
  display: block;
  border: 1px solid #d7d7db;
  width: 300px;
  font-size: 14px;
  align-self: center;
  color: #6b6b6b;
  justify-self: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  input {
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
    margin-bottom: 20px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
  flex-direction: row;
  justify-content: center;
`;

export const WrapperCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 0px 0px 20px 0px;

  input {
    width: 20px;
    height: 20px;
    background: white;
    color: #6f9dea;
    top: 0px;
    margin-right: 20px;
  }
`;
