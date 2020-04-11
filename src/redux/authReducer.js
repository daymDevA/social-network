import * as api from "../components/API/api";
import { setUserProfile } from "./reducerProfilePage";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  avatar: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return { ...state };
  }
};

export const setUserAuthData = (data) => ({
  type: "SET_USER_AUTH_DATA",
  data,
});

export const getProfile = (id) => (dispatch) => {
  api.getUserProfile(id).then((response) => {
    dispatch(setUserProfile(response));
  });
};

export const setUserData = (id) => (dispatch) => {
  let resultCode = null;

  api.getAuthData().then((response) => {
    resultCode = response.resultCode;

    if (resultCode === 0) {
      const { id, email, login } = response.data;
      dispatch(setUserAuthData({ id, email, login }));
      getProfile(id);
    }
  });
};

export default authReducer;
