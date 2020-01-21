import axios from "axios";

const post = {
  get: postID => axios.get("/api/category/posts/" + postID)
};

export default {
  get: async postID => {
    const postResponse = await post.get(postID);

    return {
      postID: postResponse.data.data.postID,
      author: postResponse.data.data.author,
      category: postResponse.data.data.category,
      title: postResponse.data.data.title,
      participantCnt: postResponse.data.data.participantCnt,
      totalPoint: postResponse.data.data.totalPoint,
      averagePoint: postResponse.data.data.averagePoint,
      uploadDate: postResponse.data.data.uploadDate
    };
  }
};
