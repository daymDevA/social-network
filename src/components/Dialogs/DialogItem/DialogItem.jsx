import React from "react";
import { NavLink } from "react-router-dom";
import {
  DialogsItem,
  DonotReadMessages,
  WrapperName,
  StyledData,
  WrapperImg,
  WrapperMessagePreview,
} from "./StyledDialogItem";

const DialogItem = ({ id, name, data, countMessages, lastMessage }) => {
  const path = `/dialog/` + id;
  return (
    <NavLink to={path}>
      <DialogsItem>
        <WrapperName>
          <span>{name}</span>
          <StyledData>{data}</StyledData>
        </WrapperName>

        <WrapperMessagePreview>
          <WrapperImg>
            <img
              src="https://img.112.international/original/2020/03/20/289125.jpg"
              alt=""
            />
          </WrapperImg>
          <p>{lastMessage}</p>
          <div>
            <DonotReadMessages>{countMessages}</DonotReadMessages>
          </div>
        </WrapperMessagePreview>
      </DialogsItem>
    </NavLink>
  );
};

export default DialogItem;
