import React from "react";
import { StyledItemFriends } from "./StyledItemFriends";
const ItemFriends = ({ avatar, name }) => {
  return (
    <StyledItemFriends>
      <img src={avatar} alt=""></img>
      <label>{name}</label>
    </StyledItemFriends>
  );
};

export default ItemFriends;
