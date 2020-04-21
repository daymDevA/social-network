import * as api from "../components/API/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const USER_ID = "USER_ID";
const SET_STATUS = "SET_STATUS";
const SET_PHOTOS = "SET_PHOTOS";
const SET_CAPTCHA = "SET_CAPTCHA";

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
  captcha: null,
};

const reducerProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      };
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
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      };
    default:
      return { ...state };
  }
};

export const setStatus = (status) => {
  return {
    type: "SET_STATUS",
    status,
  };
};

export const setCaptcha = (captcha) => {
  return {
    type: "SET_CAPTCHA",
    captcha,
  };
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

export const updateUserProfile = (profile) => (dispatch) => {
  api.updateUserProfile(profile).then((response) => {
    if (response.resultCode === 0) {
      api.getUserProfile(profile.userId).then((response) => {
        console.log(response);

        dispatch(setUserProfile(profile));
      });
    }
  });
};

export const getCaptcha = () => (dispatch) => {
  api.getCaptcha().then((response) => {
    dispatch(setCaptcha(response.data.url));
  });
};

export const uploadFile = (file) => (dispatch) => {
  api.uploadFile(file).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setPhoto(response.data.photos));
    }
  });
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

export const setPhoto = (photos) => {
  return {
    type: "SET_PHOTOS",
    photos,
  };
};

export const getDataUserProfile = (state) => {
  return state.profilePage.userProfile;
};

export const getDataStatus = (state) => {
  return state.profilePage.status;
};

export const getDataUserProfilePhotoSmall = (state) => {
  return state.profilePage.userProfile.photos.small;
};

export const getDataUserProfilePhotoLarge = (state) => {
  return state.profilePage.userProfile.photos.large;
};

export default reducerProfilePage;
