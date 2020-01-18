import * as types from "./mutation_types";

export default {
  /* USER */
  [types.USER.UID](state, uid) {
    state.user.uid = uid;
  },
  [types.USER.UNAME](state, uname) {
    state.user.uname = uname;
  },
  [types.USER.UTYPE](state, utype) {
    state.user.utype = utype;
  },
  [types.USER.AUTH_STATE](state, authState) {
    state.user.authState = authState;
  },
  [types.USER.IS_AUTH](state, isAuth) {
    state.user.isAuth = isAuth;
  },
  [types.USER.IS_ADMIN](state, isAdmin) {
    state.user.isAdmin = isAdmin;
  }
};
