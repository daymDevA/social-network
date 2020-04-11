import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  width: 900px;

  justify-content: center;
  margin: 15px auto;
  box-sizing: border-box;
`;

export const AvatarWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Avatar = styled.div`
  width: 50px;
  justify-self: center;
  height: 50px;
  margin: 0 auto;
  border-radius: 50%;
  background-image: url("https://www.tradeinn.com/img/trekkinn-home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  width: 600px;
  height: 60px;
  margin: 0px 10px;
  border: 1px solid #d7d7db;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxInfo = styled.div`
  padding: 10px 20px;
  label {
    display: block;
    color: #95959a;
    font-size: 13px;
  }
  label:nth-child(1) {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  font-size: 13px;
  color: white;
  background: #6f9dea;
  border: 1px solid #6f9dea;
  border-radius: 10px;
  width: 80px;
  padding: 3px 0px;
  margin: 10px auto 0px;
`;
