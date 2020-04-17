import * as api from "../components/API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USERS = "TOTAL_USERS";
const PRELOUDER = "PRELOUDER";
const IN_FOLLOWING_PROGRESS = "IN_FOLLOWING_PROGRESS";
const GET_OUT_IN_FOLLOWING_PROGRESS = "GET_OUT_IN_FOLLOWING_PROGRESS";

const initialState = {
  usersData: [],
  currentPage: 1,
  totalUsers: 0,
  usersCountOnPage: 5,
  isPreloader: false,
  inFollowingProcess: [],
};

const reducerUsersFind = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        usersData: [...action.users],
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.countUsers,
      };
    case PRELOUDER:
      return {
        ...state,
        isPreloader: action.isLouding,
      };
    case IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        inFollowingProcess: state.inFollowingProcess.includes(action.id) || [
          ...state.inFollowingProcess,
          action.id,
        ],
      };
    case GET_OUT_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        inFollowingProcess: state.inFollowingProcess.filter(
          (id) => id !== action.id
        ),
      };
    default:
      return { ...state };
  }
};

export const setInFollowingProcess = (id) => {
  return { type: "IN_FOLLOWING_PROGRESS", id };
};

export const getOutInFollowingProcess = (id) => {
  return { type: "GET_OUT_IN_FOLLOWING_PROGRESS", id };
};

export const follow = (id) => {
  return { type: "FOLLOW", userId: id };
};

export const unFollow = (id) => {
  return { type: "UNFOLLOW", userId: id };
};

export const setUsers = (usersData) => {
  return { type: "SET_USERS", users: [...usersData] };
};

export const setCurrentPage = (page) => {
  return { type: "CURRENT_PAGE", page };
};

export const setTotalPages = (countUsers) => {
  return { type: "TOTAL_USERS", countUsers };
};

export const setPreloader = (isLouding) => {
  return {
    type: "PRELOUDER",
    isLouding,
  };
};

export const getUsers = (currentPage, usersCountOnPage) => (dispatch) => {
  dispatch(setPreloader(true));
  dispatch(setCurrentPage(currentPage));
  api.getUsers(currentPage, usersCountOnPage).then((response) => {
    dispatch(setUsers(response.items));
    dispatch(setTotalPages(response.totalCount));
    dispatch(setPreloader(false));
  });
};

export const toggleFollowing = (id, typeFollowing) => (dispatch) => {
  const fun = (id, toggleFunction, apiToggleFunction) => {
    dispatch(setInFollowingProcess(id));

    apiToggleFunction(id).then((response) => {
      if (response.resultCode === 0) {
        dispatch(getOutInFollowingProcess(id));
        dispatch(toggleFunction(id));
      }
    });
  };

  switch (typeFollowing) {
    case "follow":
      fun(id, follow, api.followUser);
      break;
    case "unfollow":
      fun(id, unFollow, api.unFollowUser);
      break;

    default:
      return 0;
  }
};

export const getDataUser = (state) => {
  return state.users.usersData;
};

export const getDataIsPrelouder = (state) => {
  return state.users.isPreloader;
};

export const getDataTotalUsers = (state) => {
  return state.users.totalUsers;
};

export const getDataCurrentPage = (state) => {
  return state.users.currentPage;
};

export const getDataInFollowingProgress = (state) => {
  return state.users.inFollowingProcess;
};

export const getDataUsersCountOnPage = (state) => {
  return state.users.usersCountOnPage;
};

export default reducerUsersFind;
