import loginAPI from "./login";
import signupAPI from "./signup";
import userAPI from "./user";
import profileAPI from "./profile";

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
  profile: {
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
  }
};
