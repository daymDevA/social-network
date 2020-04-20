import styled from "styled-components";

export const BoxPopover = styled.div`
  display: flex;
  flex-direction: column;
  background: #d42737;
  max-width: 200px;
  color: white;
  top: 0;
  right: 100%;
  margin: 5px;
  padding: 10px;
  top: -50%;
  right: 105%;
  border-radius: 10px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  z-index: 6;
  position: absolute;
  /* left: -300px; */
`;

export const Arrow = styled.div`
  position: absolute;
  display: block;
  width: 8.48528137px;
  height: 8.48528137px;
  border-radius: 10%;
  left: calc(100% - 12px);

  top: calc(50% - 9px);
  color: #d42737;
  background: 0 0;
  border-style: solid;
  border-width: 4.24264069px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`;

export const Box = styled.div`
  padding: 5px 0;
  span {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: 14px;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }
`;
