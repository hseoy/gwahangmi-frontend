import axios from "axios";

const point = {
  get: (postID, uid) =>
    axios.get("/api/category/posts/" + postID + "/point", {
      params: {
        uid: uid
      }
    }),
  post: (postID, uid, pointValue) =>
    axios.post("/api/category/posts/" + postID + "/point", {
      uid: uid,
      point: pointValue
    })
};

export default {
  get: async (postID, uid) => {
    const pointResponse = await point.get(postID, uid);
    try {
      return {
        uid: pointResponse.data.data.uid,
        point: pointResponse.data.data.point,
        parentsPostID: pointResponse.data.data.parentsPostID
      };
    } catch {
      return {
        uid: uid,
        point: -1,
        parentsPostID: postID
      };
    }
  },
  post: async (postID, uid, pointValue) => {
    const pointResponse = await point.post(postID, uid, pointValue);

    return {
      isSuccess: pointResponse.data.data.isSuccess,
      message: pointResponse.data.data.message
    };
  }
};
