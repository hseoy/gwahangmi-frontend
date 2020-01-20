import axios from "axios";

const usersAPI = {
  get: (limit, point, post, sort) =>
    axios.get("/api/account/users", {
      params: {
        limit: limit,
        point: point,
        post: post,
        sort: sort
      }
    })
};

export default {
  get: async (limit, point, post, sort) => {
    const usersResponse = await usersAPI.get(limit, point, post, sort);

    return {
      users: usersResponse.data.data.users
    };
  }
};
