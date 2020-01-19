import api from "../service";

import { USER } from "./mutation_types";

const set = {
  user: ({ commit }, mutationType, data) => {
    commit(mutationType, data);
  }
};

const processResponse = {
  sign: (store, user, response) => {
    set.user(store, USER.IS_AUTH, response.isAuth);
    set.user(store, USER.AUTH_STATE, response.authState);
    if (response.isAuth) {
      set.user(store, USER.UNAME, response.uname);
      set.user(store, USER.UID, user.uid);
      set.user(store, USER.IS_ADMIN, isAdmin(user.uid));
      set.user(store, USER.UTYPE, getUType(user.uid));
    }
  },
  user: (store, response) => {
    set.user(store, USER.PROFILE_IMG, response.profileImg);
    set.user(store, USER.POINT, response.point);
    set.user(store, USER.POST_CNT, response.postCnt);
    set.user(store, USER.UNAME, response.uname);
    set.user(store, USER.UID, response.uid);
  }
};

const isAdmin = utype => {
  return utype === "admin" || utype === "dev";
};

const getUType = uname => {
  if (uname === "admin" || uname === "dev" || uname === "guest") {
    return uname;
  }
  return "user";
};

const getUserInfo = async uid => {
  const userResponse = await api.user.get(uid);
  return userResponse;
};

export default {
  async login(store, { uid, pw }) {
    const loginResponse = await api.login(uid, pw);
    processResponse.sign(store, { uid, pw }, loginResponse);
  },
  async signup(store, { uname, uid, pw }) {
    const signupResponse = await api.signup(uname, uid, pw);
    processResponse.sign(store, { uid, pw }, signupResponse);
  },
  getUserInfo(store, { uid }) {
    const userResponse = getUserInfo(uid);
    processResponse.user(store, userResponse);
  }
};
