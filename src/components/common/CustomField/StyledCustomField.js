import styled, { css } from "styled-components";
import { Input } from "../../../styles";
export const Box = styled.div`
  position: relative;
`;

export const InputCustom = styled(Input)`
  border: 1px solid ${(props) => (props.red ? "red" : "#d7d7db")};
`;

export const IconError = styled.div`
  display: block;
  top: 3px;
  z-index: 6;
  left: calc(100% - 30px);
  font-size: 20px;
  color: #d42737;
  position: absolute;
`;
