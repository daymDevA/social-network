import styled from "styled-components";

export const WrapperPost = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin: 5px 0;
  width: 900px;
  img {
    border-radius: 50%;
    margin: 0 30px;
    width: 50px;
    height: 50px;
    display: inline-block;
  }

  article {
    display: inline-block;
    align-self: center;
  }
`;

export const WrapperLikes = styled.div`
  width: 100%;
  display: grid;
  grid-column-start: 2;
  justify-content: end;
  grid-template-columns: 1fr 150px;

  div:first-child {
    text-align: right;
    margin-right: 20px;
  }

  div > div {
    display: inline-block;
    margin: 5px;
    margin-top: 0;
    justify-self: end;
    span {
      margin: 5px;
    }
  }
`;
