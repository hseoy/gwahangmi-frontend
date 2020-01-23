import api from "../service";

import { USER, RANK, NOTICE, POST, QUIZ } from "./mutation_types";

const set = {
  user: ({ commit }, mutationType, data) => {
    commit(mutationType, data);
  },
  rank: ({ commit }, mutationType, data) => {
    commit(mutationType, data);
  },
  post: ({ commit }, mutationType, data) => {
    commit(mutationType, data);
  },
  quiz: ({ commit }, mutationType, data) => {
    commit(mutationType, data);
  },
  notice: ({ commit }, mutationType, data) => {
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

const setNotice = (store, state, title, body, button, style) => {
  set.notice(store, NOTICE.STATE, state);
  set.notice(store, NOTICE.TITLE, title);
  set.notice(store, NOTICE.BODY, body);
  set.notice(store, NOTICE.BUTTON, button);
  set.notice(store, NOTICE.STYLE.HEIGHT, style.height);
  set.notice(store, NOTICE.STYLE.DISPLAY, style.display);
};

const setUpload = (store, upload) => {
  set.post(store, POST.UPLOAD, upload);
};
const setQuizUpload = (store, upload) => {
  set.quiz(store, QUIZ.UPLOAD, upload);
};

export default {
  /* SIGN */
  async login(store, { uid, pw }) {
    const loginResponse = await api.login(uid, pw);
    processResponse.sign(store, { uid, pw }, loginResponse);
  },
  logout(store) {
    setNotice(store, false, "", "", "", { height: "0%", display: "none" });
    set.user(store, USER.UID, "");
    set.user(store, USER.UNAME, "");
    set.user(store, USER.UTYPE, "");
    set.user(store, USER.AUTH_STATE, "");
    set.user(store, USER.PROFILE_IMG, "");
    set.user(store, USER.POINT, 0);
    set.user(store, USER.POST_CNT, 0);
    set.user(store, USER.IS_AUTH, false);
    set.user(store, USER.IS_ADMIN, false);
  },
  async auth(store, { uid, pw }) {
    const loginResponse = await api.login(uid, pw);
    return loginResponse.isAuth;
  },
  async signup(store, { uname, uid, pw }) {
    const signupResponse = await api.signup(uname, uid, pw);
    processResponse.sign(store, { uid, pw }, signupResponse);
  },
  /* USERS */
  async usersGet(store, { limit, point, post, sort }) {
    const usersResponse = await api.users.get(limit, point, post, sort);
    return usersResponse;
  },
  async putUser(store, { uid, uname }) {
    const userResponse = await api.user.put(uid, uname);
    if (userResponse.isSuccess) {
      set.user(store, USER.UNAME, uname);
    }
    return userResponse;
  },
  async userLeave(store, { uid }) {
    const userResponse = await api.user.delete(uid);
    return userResponse;
  },
  /* USER */
  async getUserInfo(store, { uid }) {
    const userResponse = await getUserInfo(uid);
    processResponse.user(store, userResponse);
    set.user(store, USER.UID, uid);
  },
  async getUserInfoJust(store, { uid }) {
    const userResponse = await getUserInfo(uid);
    return userResponse;
  },
  preProfileChange(store, { formData, uname }) {
    set.user(store, USER.PROFILE_CHANGE.FORM_DATA, formData);
    set.user(store, USER.PROFILE_CHANGE.UNAME, uname);
  },
  /* RANK */
  userHighRankTop3(store, { users }) {
    if (users == null || users == undefined) {
      return;
    }
    if (users.length > 0) {
      set.rank(store, RANK.TOP[0], users[0]);
    } else {
      set.rank(store, RANK.TOP[0], "과학미");
    }
    if (users.length > 1) {
      set.rank(store, RANK.TOP[1], users[1]);
    } else {
      set.rank(store, RANK.TOP[1], "과학미");
    }
    if (users.length > 2) {
      set.rank(store, RANK.TOP[2], users[2]);
    } else {
      set.rank(store, RANK.TOP[2], "과학미");
    }
  },
  /* PROFILE */
  async profileGetFile(store, { uid }) {
    const profileImgFile = await api.profile.getFile(uid);
    return profileImgFile;
  },
  async profileGet(store, { uid }) {
    const profileResponse = await api.profile.get(uid);
    return profileResponse;
  },
  async profilePost(store, { formData }) {
    const profileResponse = await api.profile.post(formData);
    return profileResponse;
  },
  async profilePut(store, { formData }) {
    const profileResponse = await api.profile.put(formData);
    return profileResponse;
  },
  async profileDelete(store, { uid }) {
    const profileResponse = await api.profile.delete(uid);
    return profileResponse;
  },
  /* POST */
  async postGet(store, { postID }) {
    const postResponse = await api.post.get(postID);
    return postResponse;
  },
  async postGetContent(store, { postID }) {
    const postResponse = await api.post.getContent(postID);
    return postResponse;
  },
  /* POSTS */
  preUploadPost(store, { category, title, content }) {
    set.post(store, POST.PRE.CATEGORY, category);
    set.post(store, POST.PRE.TITLE, title);
    set.post(store, POST.PRE.CONTENT, content);
  },
  async postsGet(
    store,
    { category, limit, skip, popularity, total, average, sort }
  ) {
    const postsResponse = await api.posts.get(
      category,
      limit,
      skip,
      popularity,
      total,
      average,
      sort
    );
    return postsResponse;
  },
  async postsPost(store, { author, category, title, content }) {
    const postsResponse = await api.posts.post(
      author,
      category,
      title,
      content
    );
    setUpload(store, true);
    return postsResponse;
  },
  setUpload(store, { upload }) {
    setUpload(store, upload);
  },
  async postsPut(store, { author, category, postID, title, content }) {
    const postsResponse = await api.posts.put(
      author,
      category,
      postID,
      title,
      content
    );
    return postsResponse;
  },
  async postsDelete(store, { postId, category }) {
    const postsResponse = await api.posts.delete(postId, category);
    return postsResponse;
  },
  /* POINT */
  async pointGet(store, { postID, uid }) {
    const pointResponse = await api.point.get(postID, uid);
    return pointResponse;
  },
  async pointPost(store, { postID, uid, point }) {
    const pointResponse = await api.point.post(postID, uid, point);
    return pointResponse;
  },
  /* QUIZZES */
  preUploadQuiz(store, { title, answers, rightAnswer, explanation }) {
    set.post(store, QUIZ.PRE.TITLE, title);
    set.post(store, QUIZ.PRE.ANSWERS, answers);
    set.post(store, QUIZ.PRE.RIGHT_ANSWER, rightAnswer);
    set.post(store, QUIZ.PRE.EXPLANATION, explanation);
  },
  setQuizUpload(store, { upload }) {
    setQuizUpload(store, upload);
  },
  async quizzesGet(store, { limit, skip, point, participantCnt, sort }) {
    const quizzesResponse = await api.quizzes.get(
      limit,
      skip,
      point,
      participantCnt,
      sort
    );
    return quizzesResponse;
  },
  async quizzesPost(
    store,
    { author, title, explanation, answers, rightAnswer, point }
  ) {
    const quizzesResponse = await api.quizzes.post(
      author,
      title,
      explanation,
      answers,
      rightAnswer,
      point
    );
    setQuizUpload(store, true);
    return quizzesResponse;
  },
  /* QUIZ */
  async quizGet(store, { quizID }) {
    const quizResponse = await api.quiz.get(quizID);
    return quizResponse;
  },
  /* NOTICE */
  setNotice(store, { state, title, body, button, style }) {
    setNotice(store, state, title, body, button, style);
  }
};
