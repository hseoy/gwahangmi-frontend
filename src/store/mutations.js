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
  },
  [types.USER.PROFILE_CHANGE.FORM_DATA](state, formData) {
    state.user.profileChange.formData = formData;
  },
  [types.USER.PROFILE_CHANGE.UNAME](state, uname) {
    state.user.profileChange.uname = uname;
  },
  /* RANK */
  [types.RANK.TOP[0]](state, uid) {
    state.rank.top.fir = uid;
  },
  [types.RANK.TOP[1]](state, uid) {
    state.rank.top.sec = uid;
  },
  [types.RANK.TOP[2]](state, uid) {
    state.rank.top.thir = uid;
  },
  /* NOTICE */
  [types.NOTICE.STATE](state, noticeState) {
    state.notice.state = noticeState;
  },
  [types.NOTICE.TITLE](state, title) {
    state.notice.title = title;
  },
  [types.NOTICE.BODY](state, body) {
    state.notice.body = body;
  },
  [types.NOTICE.BUTTON](state, button) {
    state.notice.button = button;
  },
  [types.NOTICE.STYLE.HEIGHT](state, height) {
    state.notice.style.height = height;
  },
  [types.NOTICE.STYLE.DISPLAY](state, display) {
    state.notice.style.display = display;
  },
  /* POST */
  [types.POST.PRE.CATEGORY](state, category) {
    state.post.pre.category = category;
  },
  [types.POST.PRE.TITLE](state, title) {
    state.post.pre.title = title;
  },
  [types.POST.PRE.CONTENT](state, content) {
    state.post.pre.content = content;
  },
  [types.POST.UPLOAD](state, upload) {
    state.post.upload = upload;
  }
};
