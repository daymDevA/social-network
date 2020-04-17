import React from "react";
import Post from "./Post/Post";

import { WrapperPost, WrapperNewPostCreat } from "./StyledMyPost";
import { Field, reduxForm } from "redux-form";

let FormNewPost = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <WrapperNewPostCreat>
        <Field name="newPostMessage" component="textarea" type="text" />
        <button>Sent</button>
      </WrapperNewPostCreat>
    </form>
  );
};

FormNewPost = reduxForm({ form: "FormNewPost" })(FormNewPost);

const MyPosts = ({ addPost, postsData }) => {
  return (
    <WrapperPost>
      <label>My posts</label>
      <FormNewPost onSubmit={(formData) => addPost(formData.newPostMessage)} />
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
