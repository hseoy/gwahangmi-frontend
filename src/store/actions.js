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
    authMsg: ({ commit }, data) => {
      commit(USER.AUTH_MSG, data);
    },
    isAuth: ({ commit }, data) => {
      commit(USER.IS_AUTH, data);
    },
    isAdmin: ({ commit }, data) => {
      commit(USER.IS_ADMIN, data);
    }
  }
};

const processLoginResponse = (store, response) => {
  set.user.isAuth(store, response.isAuth);
  set.user.authMsg(store, response.authMsg);
  if (response.isAuth) {
    set.user.uname(store, response.uname);
    set.user.isAdmin(store, isAdmin(response.utype));
  }
};

const isAdmin = utype => {
  return utype === "admin" || utype == "dev";
};

export default {
  async login(store, { uid, pw }) {
    const loginResponse = await api.login(uid, pw);
    processLoginResponse(store, loginResponse);
  }
};
