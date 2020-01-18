import axios from "axios";

const reqLogin = (uid, pw) =>
  axios.post("api/account/login", {
    uid: uid,
    pw: pw
  });

export default {
  async login(uid, pw) {
    const loginResponse = await reqLogin(uid, pw);

    return {
      isAuth: loginResponse.data.data.isSuccess,
      uname: loginResponse.data.data.uname,
      authState: loginResponse.data.data.message
    };
  }
};
