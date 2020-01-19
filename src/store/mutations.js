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
  [types.USER.PROFILE_IMG](state, profileImg) {
    state.user.profileImg = profileImg;
  },
  [types.USER.POINT](state, point) {
    state.user.point = point;
  },
  [types.USER.POST_CNT](state, postCnt) {
    state.user.postCnt = postCnt;
  },
  [types.USER.IS_AUTH](state, isAuth) {
    state.user.isAuth = isAuth;
  },
  [types.USER.IS_ADMIN](state, isAdmin) {
    state.user.isAdmin = isAdmin;
  }
};
