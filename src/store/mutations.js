import * as types from "./mutation_types";

export default {
  /* USER */
  [types.USER.UID](state, uid) {
    state.uid = uid;
  },
  [types.USER.UNAME](state, uname) {
    state.uname = uname;
  },
  [types.USER.AUTH_MSG](state, authMsg) {
    state.authMsg = authMsg;
  },
  [types.USER.IS_AUTH](state, isAuth) {
    state.isAuth = isAuth;
  },
  [types.USER.IS_ADMINE](state, isAdmin) {
    state.isAdmin = isAdmin;
  }
};
