import loginAPI from "./login";
import signupAPI from "./signup";
import userAPI from "./user";
import usersAPI from "./users";
import profileAPI from "./profile";
import postsAPI from "./posts";
import postAPI from "./post";
import pointAPI from "./point";
import quizzesAPI from "./quizzes";
import quizAPI from "./quiz";

export default {
  /* SIGN */
  async login(uid, pw) {
    const loginResponse = await loginAPI.login(uid, pw);
    return loginResponse;
  },
  async signup(uname, uid, pw) {
    const signupResponse = await signupAPI.signup(uname, uid, pw);
    return signupResponse;
  },
  /* USER */
  user: {
    async get(uid) {
      const userResponse = await userAPI.get(uid);
      return userResponse;
    },
    async put(uid, uname) {
      const userResponse = await userAPI.put(uid, uname);
      return userResponse;
    },
    async delete(uid) {
      const userResponse = await userAPI.delete(uid);
      return userResponse;
    }
  },
  /* USERS */
  users: {
    async get(limit, point, post, sort) {
      const usersResponse = await usersAPI.get(limit, point, post, sort);
      return usersResponse;
    }
  },
  /* PROFILE */
  profile: {
    async getFile(uid) {
      const profileImgFile = await profileAPI.getFile(uid);
      return profileImgFile;
    },
    async get(uid) {
      const profileResponse = await profileAPI.get(uid);
      return profileResponse;
    },
    async post(formData) {
      const profileResponse = await profileAPI.post(formData);
      return profileResponse;
    },
    async put(formData) {
      const profileResponse = await profileAPI.put(formData);
      return profileResponse;
    },
    async delete(uid) {
      const profileResponse = await profileAPI.delete(uid);
      return profileResponse;
    }
  },
  /* POSTS */
  posts: {
    async get(category, limit, skip, popularity, total, average, sort) {
      const postsResponse = await postsAPI.get(
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
    async post(author, category, title, content) {
      const postsResponse = await postsAPI.post(
        author,
        category,
        title,
        content
      );
      return postsResponse;
    },
    async put(author, category, postID, title, content) {
      const postsResponse = await postsAPI.put(
        author,
        category,
        postID,
        title,
        content
      );
      return postsResponse;
    },
    async delete(postID, category) {
      const postsResponse = await postsAPI.delete(postID, category);
      return postsResponse;
    }
  },
  /* POST */
  post: {
    get: async postID => {
      const postResponse = await postAPI.get(postID);
      return postResponse;
    },
    getContent: async postID => {
      const postResponse = await postAPI.getContent(postID);
      return postResponse;
    }
  },
  /* POINT */
  point: {
    get: async (postID, uid) => {
      const pointResponse = await pointAPI.get(postID, uid);
      return pointResponse;
    },
    post: async (postID, uid, point) => {
      const pointResponse = await pointAPI.post(postID, uid, point);
      return pointResponse;
    }
  },
  /* QUIZZES */
  quizzes: {
    async get(limit, skip, point, participantCnt, sort) {
      const quizzesResponse = await quizzesAPI.get(
        limit,
        skip,
        point,
        participantCnt,
        sort
      );
      return quizzesResponse;
    },
    async post(author, title, explanation, answers, rightAnswer, point) {
      const quizzesResponse = await quizzesAPI.post(
        author,
        title,
        explanation,
        answers,
        rightAnswer,
        point
      );
      return quizzesResponse;
    }
  },
  /* QUIZ */
  quiz: {
    get: async quizID => {
      const quizResponse = await quizAPI.get(quizID);
      return quizResponse;
    }
  }
};
