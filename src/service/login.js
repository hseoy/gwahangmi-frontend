import axios from "axios";

const reqLogin = (uid, pw) =>
  axios.post("api/user/login", {
    uid: uid,
    pw: pw
  });

export default {
  async login(uid, pw) {
    const loginResponse = await reqLogin(uid, pw);

    return {
      isSuccess: loginResponse.data.isSuccess,
      uname: loginResponse.data.uname,
      authMsg: loginResponse.data.authMsg
    };
  }
};
