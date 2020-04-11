import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperSearch = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: row;

  div {
    color: #929292;
    font-size: 16px;
    margin: 20px;
  }
`;

export const Input = styled.input`
  border: 1px solid #d7d7db;
  height: 35px;
  width: 40%;
  z-index: -1;
  border-radius: 15px;
  top: 20px;
  color: #929292;
  position: relative;
`;

export const WrapperUsers = styled.section`
  height: calc(100vh - 230px);
  overflow-y: hidden;
  scroll-behavior: auto;
`;

export const WrapperPagination = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  font-size: 16px;
  color: white;
  background: #6f9dea;
  border: 1px solid #6f9dea;
  border-radius: 10px;
  height: 40px;
  width: 150px;
  justify-self: flex-center;
  padding: 0 20px;
  margin: 20px;
`;

// .currentPage {
//     font-weight: bold;
//   }
