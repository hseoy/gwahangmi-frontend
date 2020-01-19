import axios from "axios";

const userAPI = {
  get: uid => axios.get("/api/account/users/" + uid),
  put: (uid, uname) =>
    axios.put("/api/account/users/" + uid, {
      uname: uname
    }),
  delete: uid => axios.delete("/api/account/users/" + uid)
};

export default {
  delete: async uid => {
    const userResponse = await userAPI.delete(uid);

    return {
      uid: userResponse.data.data.uid,
      isSuccess: userResponse.data.data.isSuccess,
      message: userResponse.data.data.message
    };
  },
  put: async (uid, uname) => {
    const userResponse = await userAPI.put(uid, uname);

    return {
      uid: userResponse.data.data.uid,
      isSuccess: userResponse.data.data.isSuccess,
      message: userResponse.data.data.message
    };
  },
  get: async uid => {
    const userResponse = await userAPI.get(uid);

    return {
      isAuth: userResponse.data.data.uid,
      uname: userResponse.data.data.uname,
      profileImg: userResponse.data.data.profileImg,
      point: userResponse.data.data.point,
      postCnt: userResponse.data.data.postCnt
    };
  }
};
