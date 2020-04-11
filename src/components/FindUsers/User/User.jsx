import React from "react";
import default_photo from "../../../assets/images/default_photo.jpg";
import { NavLink } from "react-router-dom";
import {
  Box,
  AvatarWrapper,
  Avatar,
  WrapperUserInfo,
  BoxInfo,
  Button,
} from "./StyledUser";

const User = ({ user, InFollowingProcess, toggleFollowing }) => {
  return (
    <Box>
      <AvatarWrapper>
        <NavLink to={`/profile/${user.id}`}>
          <Avatar
            style={{
              backgroundImage: `url(${
                user.photos.small !== null ? user.photos.small : default_photo
              })`,
            }}
          ></Avatar>
        </NavLink>
        {user.followed ? (
          <Button
            disabled={InFollowingProcess}
            onClick={() => {
              toggleFollowing(user.id, "unfollow");
            }}
          >
            followed
          </Button>
        ) : (
          <Button
            disabled={InFollowingProcess}
            onClick={() => {
              this.props.toggleFollowing(user.id, "unfollow");
            }}
          >
            unFollowed
          </Button>
        )}
      </AvatarWrapper>

      <WrapperUserInfo>
        <BoxInfo>
          <label>{user.name}</label>
          <label>{user.status}</label>
        </BoxInfo>
        <BoxInfo>
          <label>{user.country}</label>
          <label>{user.city}</label>
        </BoxInfo>
      </WrapperUserInfo>
    </Box>
  );
};

export default User;
