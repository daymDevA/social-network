import * as api from "../components/API/api";

const ADD_POST = "ADD_POST";
const UPDATE_TEXT_POST = "UPDATE_TEXT_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const USER_ID = "USER_ID";
const SET_STATUS = "SET_STATUS";

const initialState = {
  postData: [
    {
      id: 1,
      message: "hi how are you",
      countLikes: 23,
      countDisLikes: 3,
    },
    {
      id: 2,
      message: "hi how are you",
      countLikes: 23,
      countDisLikes: 3,
    },
    {
      id: 3,
      message: "hi how are you",
      countLikes: 23,
      countDisLikes: 3,
    },
    {
      id: 4,
      message: "hi how are you",
      countLikes: 23,
      countDisLikes: 3,
    },
    {
      id: 5,
      message: "hi how are you",
      countLikes: 23,
      countDisLikes: 3,
    },
  ],
  newPostText: "",
  userProfile: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: "",
    userId: 0,
    photos: {
      small: null,
      large: null,
    },
  },
  userId: 6771,
  status: "",
};

const reducerProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case ADD_POST:
      return {
        ...state,
        postData: [
          {
            id: state.postData.length + 1,
            message: action.newPostText,
            countLikes: 0,
            countDisLikes: 0,
          },
          ...state.postData,
        ],
        newPostText: "",
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };

    case USER_ID:
      return {
        ...state,
        userId: action.userId,
      };

    default:
      return { ...state };
  }
};

export const getUserStatus = (id) => (dispatch) => {
  api.getStatus(id).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (id, status) => (dispatch) => {
  api.updateUserStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getUserStatus(id));
    }
  });
};

export const setStatus = (status) => {
  return {
    type: "SET_STATUS",
    status,
  };
};

export const addPostActionCreater = (newPostText) => ({
  type: "ADD_POST",
  newPostText,
});

export const setUserProfile = (userProfile) => {
  return {
    type: "SET_USER_PROFILE",
    userProfile,
  };
};

export const setUserID = (userId) => {
  return {
    type: "USER_ID",
    userId,
  };
};

export default reducerProfilePage;
