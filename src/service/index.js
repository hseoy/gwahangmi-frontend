import loginAPI from "./login";
import signupAPI from "./signup";

export default {
  async login(uid, pw) {
    const loginResponse = await loginAPI.login(uid, pw);
    return loginResponse;
  },
  async signup(uname, uid, pw) {
    const signupResponse = await signupAPI.signup(uname, uid, pw);
    return signupResponse;
  }
};
