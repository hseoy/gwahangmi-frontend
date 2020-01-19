import axios from "axios";

const userAPI = {
  get: uid => axios.get("/api/account/users/" + uid)
};

export default {
  user: {
    async get(uid) {
      const signupResponse = await userAPI.get(uid);

      return {
        isAuth: signupResponse.data.data.uid,
        uname: signupResponse.data.data.uname,
        profileImg: signupResponse.data.data.profileImg,
        point: signupResponse.data.data.point,
        postCnt: signupResponse.data.data.postCnt
      };
    }
  }
};
