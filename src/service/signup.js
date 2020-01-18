import axios from "axios";

const reqSignup = (uname, uid, pw) =>
  axios.post("api/account/signup", {
    uname: uname,
    uid: uid,
    pw: pw
  });

export default {
  async signup(uname, uid, pw) {
    const signupResponse = await reqSignup(uname, uid, pw);

    return {
      isAuth: signupResponse.data.data.isSuccess,
      uname: signupResponse.data.data.uname,
      authState: signupResponse.data.data.message
    };
  }
};
