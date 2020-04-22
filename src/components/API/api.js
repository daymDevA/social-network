import Axios from "axios";

const instance = Axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "de932271-22a9-41e2-b46e-5c0eb4486400",
  },
});

export const getUsers = (currentPage, usersCountOnPage) => {
  return instance
    .get(`users?page=${currentPage}&count=${usersCountOnPage}`)
    .then((response) => {
      return response.data;
    });
};

export const updateUserStatus = (status) => {
  return instance.put(`profile/status`, { status: status }).then((response) => {
    return response;
  });
};

export const getStatus = (userId) => {
  return instance.get(`profile/status/${userId}`).then((response) => {
    return response;
  });
};

export const getUserProfile = (id) => {
  return instance.get(`profile/${id}`).then((response) => {
    return response.data;
  });
};

export const updateUserProfile = (profile) => {
  return instance
    .put(`profile`, { ...profile, contacts: profile.contacts })
    .then((response) => {
      return response.data;
    });
};

export const updateUserPhoto = (photo) => {
  return instance.put(`profile/photo`, { photo }).then((response) => {
    return response.data;
  });
};

export const getAuthData = () => {
  return instance.get(`auth/me`).then((response) => {
    return response.data;
  });
};

export const followUser = (id) => {
  return instance.post(`follow/${id}`).then((response) => {
    return response.data;
  });
};

export const unFollowUser = (id) => {
  return instance.delete(`follow/${id}`).then((response) => {
    return response.data;
  });
};

export const logIn = (email, password, rememberMe, captcha) => {
  return instance.post("auth/login", { email, password, rememberMe, captcha });
};

export const logOut = () => {
  return instance.delete("auth/login");
};

export const getCaptcha = () => {
  return instance.get("security/get-captcha-url");
};

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("image", file);
  return instance.put("profile/photo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
