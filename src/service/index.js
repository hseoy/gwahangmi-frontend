import loginAPI from "./login";

export default {
  async login(uid, pw) {
    const loginResponse = await loginAPI.login(uid, pw);
    return loginResponse;
  }
};
