import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Aside = styled.aside`
  grid-area: side-bar;
  background: #6f9dea;
  height: 100%;
  min-height: calc(100vh - 80px);
  border-radius: 15px 15px 0 0;
`;

export const ItemList = styled.li`
  list-style-type: none;
  padding: 5px 10px;
  text-align: center;
`;

export const List = styled.ul`
  padding: 0;
  ${ItemList}:nth-last-child() {
    margin-top: 30px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
`;

export const ActiveLink = styled.a`
  border-bottom: 2px solid white;
`;

export const WrapperBlockFriends = styled.div`
  margin-top: 50px;
`;

export const TitleFriendBlock = styled.h3`
  color: white;
  font-weight: 400;
  text-align: center;
`;

export const ListFriends = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
