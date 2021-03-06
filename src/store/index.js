import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  user: {
    uid: "",
    uname: "",
    utype: "",
    authState: "",
    profileImg: "",
    point: 0,
    postCnt: 0,
    isAuth: false,
    isAdmin: false,
    profileChange: {
      formData: "",
      uname: ""
    }
  },
  rank: {
    top: {
      fir: "",
      sec: "",
      thir: ""
    }
  },
  notice: {
    state: false,
    title: "",
    body: "",
    button: "",
    style: {
      height: "",
      display: ""
    }
  },
  post: {
    pre: {
      category: "",
      title: "",
      content: ""
    },
    upload: false
  },
  quiz: {
    pre: {
      title: "",
      answers: ["", "", "", ""],
      rightAnswer: "",
      explanation: ""
    },
    upload: false
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
