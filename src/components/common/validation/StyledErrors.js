import styled, { css } from "styled-components";

export const SpanError = css`
  position: absolute;
  z-index: 5;
  top: -5px;
  background: red;
  color: white;
  right: -130px;
  padding: 10px 15px;
  border-radius: 14px;
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
  input {
    display: block;
    top: 0;
    margin-bottom: 10px;
    border: none;
    border: 1px solid ${(props) => (props.error ? "red " : "  #d7d7db")};
    box-sizing: border-box;
    height: 35px;
    padding-left: 20px;
    border-radius: 10px;
    width: 100%;
    color: #6b6b6b;
    position: relative;
    margin-bottom: 20px;
  }
  span {
    ${(props) => (props.error ? SpanError : "display:none")}
  }
`;
