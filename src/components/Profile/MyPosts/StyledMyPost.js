import styled from "styled-components";

export const WrapperPost = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  label {
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const WrapperNewPostCreat = styled.div`
  display: grid;
  grid-template-columns: 0.95fr;
  grid-gap: 10px;
  textarea {
    min-height: 60px;
    display: block;
    text-align: start;
    padding: 10px;
    background: #e7e7ec;
    border-radius: 10px;
    border: none;
  }
  button {
    display: block;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 7px;
    background: #6f9dea;
    justify-self: end;
    color: white;
    background: #6f9dea;
  }
`;
