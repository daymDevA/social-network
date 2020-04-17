import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileAPIContainer from "../Profile/ProfileAPIContainer";
import { Box } from "./StyledProfile";
const Profile = () => {
  return (
    <Box>
      <ProfileAPIContainer />
      <MyPostsContainer />
    </Box>
  );
};

export default Profile;
