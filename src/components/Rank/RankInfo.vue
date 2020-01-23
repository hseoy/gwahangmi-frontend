<template>
  <div class="rank-info">
    <div class="list-wrap">
      <div class="user-id-wrap">
        <div class="user-num">{{ getNum }}</div>
        <div class="user-id">{{ getUID }}</div>
      </div>
      <div class="user-info">
        <div class="user-post-cnt">{{ getPostCnt }}개</div>
        <div class="user-point">{{ getPoint }}점</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "rank-info",
  props: {
    uid: String,
    num: Number
  },
  data() {
    return {
      userInfo: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
    computedQuizUploadCheck() {
      if (this.getUser.uid === this.getUID) {
        this.fetchData();
        this.setQuizUpload({ upload: false });
      }
    },
    computedUploadCheck() {
      if (this.getUser.uid === this.getUID) {
        this.fetchData();
        this.setUpload({ upload: false });
      }
    }
  },
  computed: {
    ...mapGetters(["getUser", "getPost", "getQuiz"]),
    computedUploadCheck() {
      return this.getPost.upload;
    },
    computedQuizUploadCheck() {
      return this.getQuiz.upload;
    },
    getUID() {
      if (this.userInfo == null) {
        return "과학미";
      }
      return this.userInfo.uid;
    },
    getNum() {
      if (this.userInfo == null) {
        return "로딩중";
      }
      return this.num;
    },
    getPostCnt() {
      if (this.userInfo == null) {
        return 0;
      }
      return this.userInfo.postCnt;
    },
    getPoint() {
      if (this.userInfo == null) {
        return 0;
      }
      return this.userInfo.point;
    }
  },
  methods: {
    ...mapActions(["getUserInfoJust", "setUpload", "setQuizUpload"]),
    async fetchData() {
      this.userInfo = await this.getUserInfoJust({ uid: this.uid });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/rank/rank-info.scss";
</style>
