import styled, { css } from "styled-components";

export const s = css`
  margin: 5px 20px;
  padding: 10px;
  min-height: 40px;
  position: relative;
`;

export const StyledMessage = styled.div`
  margin: 5px 20px;
  padding: 10px;
  min-height: 40px;
  position: relative;
  text-align: inherit;
  display: block !important;
  border-radius: 20px;
  max-width: 330px;
  min-width: 50px;
  justify-self: flex-end;
  ::after {
    width: 10px;
    bottom: 33px;
    display: block !important;
    position: absolute;
    content: "";
    border: 10px solid transparent;
    ${(props) =>
      props.typeMessage === "my"
        ? css`
            left: 100%;
            border-left: 15px solid #6f9dea;
          `
        : css`
            left: -36px;
            border-right: 15px solid #cacaca;
          `}
  }
  span {
    display: block;
    font-size: 12px;
    padding: 5px 0 0 0;
  }

  ${(props) =>
    props.typeMessage === "my"
      ? css`
          float: right;
          justify-self: flex-end;
          border: 1px solid #6f9dea;
          color: #6f9dea;
        `
      : css`
          border: 1px solid #e7e7ec;
          float: left;
          color: #95959a;
        `}
`;
