import React from "react";
import Post from "./Post/Post";

import { WrapperPost, WrapperNewPostCreat } from "./StyledMyPost";
import { Field } from "redux-form";

const MyPosts = ({ addPost, newPostText, onChange, postsData }) => {
  const onTextChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <WrapperPost>
      <label>My posts</label>

      <WrapperNewPostCreat>
        <form>
          <Field name="newPostMessage" component="textarea" type="text" />
          <button>Sent</button>
        </form>
      </WrapperNewPostCreat>
      {postsData.map((post) => (
        <Post
          key={post.id}
          message={post.message}
          countLikes={post.countLikes}
          countDisLikes={post.countDisLikes}
        />
      ))}
    </WrapperPost>
  );
};

export default MyPosts;
