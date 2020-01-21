import loginAPI from "./login";
import signupAPI from "./signup";
import userAPI from "./user";
import usersAPI from "./users";
import profileAPI from "./profile";
import postsAPI from "./posts";
import postAPI from "./post";

export default {
  async login(uid, pw) {
    const loginResponse = await loginAPI.login(uid, pw);
    return loginResponse;
  },
  async signup(uname, uid, pw) {
    const signupResponse = await signupAPI.signup(uname, uid, pw);
    return signupResponse;
  },
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
  users: {
    async get(limit, point, post, sort) {
      const usersResponse = await usersAPI.get(limit, point, post, sort);
      return usersResponse;
    }
  },
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
  post: {
    get: async postID => {
      const postResponse = await postAPI.get(postID);
      return postResponse;
    }
  }
};
