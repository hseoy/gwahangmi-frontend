import api from "../service";

import { USER } from "./mutation_types";

const set = {
  user: {
    uid: ({ commit }, data) => {
      commit(USER.UID, data);
    },
    uname: ({ commit }, data) => {
      commit(USER.UNAME, data);
    },
    utype: ({ commit }, data) => {
      commit(USER.UTYPE, data);
    },
    authState: ({ commit }, data) => {
      commit(USER.AUTH_STATE, data);
    },
    isAuth: ({ commit }, data) => {
      commit(USER.IS_AUTH, data);
    },
    isAdmin: ({ commit }, data) => {
      commit(USER.IS_ADMIN, data);
    }
  }
};

const processSignResponse = (store, response) => {
  set.user.isAuth(store, response.isAuth);
  set.user.authState(store, response.authState);
  if (response.isAuth) {
    set.user.uname(store, response.uname);
  }
  return response.isAuth;
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

export default {
  async login(store, { uid, pw }) {
    const loginResponse = await api.login(uid, pw);
    if (processSignResponse(store, loginResponse)) {
      set.user.uid(store, uid);
      set.user.isAdmin(store, isAdmin(uid));
      set.user.utype(store, getUType(uid));
    }
  },
  async signup(store, { uname, uid, pw }) {
    const signupResponse = await api.signup(uname, uid, pw);
    if (processSignResponse(store, signupResponse)) {
      set.user.uid(store, uid);
      set.user.isAdmin(store, isAdmin(uid));
      set.user.utype(store, getUType(uid));
    }
  }
};
