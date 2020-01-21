import axios from "axios";

const postsAPI = {
  get: (category, limit, skip, popularity, total, average, sort) =>
    axios.get("/api/category/posts", {
      params: {
        category: category,
        limit: limit,
        skip: skip,
        popularity: popularity,
        total: total,
        average: average,
        sort: sort
      }
    }),
  post: (author, category, title, content) =>
    axios.post("/api/category/posts", {
      author: author,
      category: category,
      title: title,
      content: content
    }),
  put: (author, category, postID, title, content) =>
    axios.put("/api/category/posts", {
      author: author,
      category: category,
      postID: postID,
      title: title,
      content: content
    }),
  delete: (postId, category) =>
    axios.delete("/api/category/posts", {
      params: {
        postID: postId,
        category: category
      }
    })
};

export default {
  get: async (category, limit, skip, popularity, total, average, sort) => {
    const postsResponse = await postsAPI.get(
      category,
      limit,
      skip,
      popularity,
      total,
      average,
      sort
    );

    return {
      posts: postsResponse.data.data.posts
    };
  },
  post: async (author, category, title, content) => {
    const postsResponse = await postsAPI.post(author, category, title, content);

    return {
      postID: postsResponse.data.data.postID,
      isSuccess: postsResponse.data.data.isSuccess,
      message: postsResponse.data.data.message
    };
  },
  put: async (author, category, postID, title, content) => {
    const postsResponse = await postsAPI.put(
      author,
      category,
      postID,
      title,
      content
    );

    return {
      postID: postsResponse.data.data.postID,
      isSuccess: postsResponse.data.data.isSuccess,
      message: postsResponse.data.data.message
    };
  },
  delete: async (postId, category) => {
    const postsResponse = await postsAPI.delete(postId, category);

    return {
      postID: postsResponse.data.data.postID,
      isSuccess: postsResponse.data.data.isSuccess,
      message: postsResponse.data.data.message
    };
  }
};
