import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileAPIConteiner from "../Profile/ProfileAPIConteiner";
import { Box } from "./StyledProfile";
const Profile = () => {
  return (
    <Box>
      <ProfileAPIConteiner />
      <MyPostsContainer />
    </Box>
  );
};

export default Profile;
