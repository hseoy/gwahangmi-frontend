import axios from "axios";

const profileAPI = {
  getFile: uid =>
    axios.get("/api/file/profileimg/" + uid, {
      responseType: "arraybuffer"
    }),
  get: uid =>
    axios.get("/api/account/profile", {
      params: {
        uid: uid
      }
    }),
  post: formData => {
    axios.post("/api/account/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  },
  put: formData =>
    axios.put("/api/account/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }),
  delete: uid =>
    axios.delete("/api/account/profile", {
      params: {
        uid: uid
      }
    })
};

export default {
  getFile: async uid => {
    const profileResponse = await profileAPI.getFile(uid);
    const blob = new Blob([profileResponse.data], {
      type: profileResponse.headers["content-type"]
    });
    var profileImage = await new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
    return profileImage;
  },
  get: async uid => {
    const profileResponse = await profileAPI.get(uid);

    return {
      profileImg: profileResponse.data.data.profileImg,
      isSuccess: profileResponse.data.data.isSuccess,
      message: profileResponse.data.data.message
    };
  },
  post: async formData => {
    const profileResponse = await profileAPI.post(formData);

    return {
      profileImg: profileResponse.data.data.profileImg,
      isSuccess: profileResponse.data.data.isSuccess,
      message: profileResponse.data.data.message
    };
  },
  put: async formData => {
    const profileResponse = await profileAPI.put(formData);

    return {
      profileImg: profileResponse.data.data.profileImg,
      isSuccess: profileResponse.data.data.isSuccess,
      message: profileResponse.data.data.message
    };
  },
  delete: async uid => {
    const profileResponse = await profileAPI.delete(uid);

    return {
      profileImg: profileResponse.data.data.profileImg,
      isSuccess: profileResponse.data.data.isSuccess,
      message: profileResponse.data.data.message
    };
  }
};
