import { addPostActionCreater } from "../../../redux/reducerProfilePage";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newTextPost) => dispatch(addPostActionCreater(newTextPost)),
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
