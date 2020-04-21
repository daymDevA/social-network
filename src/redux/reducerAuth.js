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

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data,
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

export const setUserData = () => (dispatch) => {
  return api.getAuthData().then((response) => {
    if (response.resultCode === 0) {
      const { id, email, login } = response.data;
      dispatch(setUserAuthData({ id, email, login, isAuth: true }));
      getProfile(id);
    }
  });
};

export const logIn = (email, password, rememberMe, captcha) => (dispatch) => {
  api.logIn(email, password, rememberMe, captcha).then((response) => {
    if (response.data.resultCode === 0) {
      debugger;
      dispatch(
        setUserData({
          id: response.data.userId,
        })
      );
    }
  });
};

export const logOut = () => (dispatch) => {
  api.logOut().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(
        setUserAuthData({ id: null, email: null, login: null, isAuth: false })
      );
    }
  });
};

export const getDataUserId = (state) => {
  return state.auth.id;
};

export const getDataLogin = (state) => {
  return state.auth.login;
};

export const getDataIsAuth = (state) => {
  return state.auth.isAuth;
};

export default reducerAuth;
