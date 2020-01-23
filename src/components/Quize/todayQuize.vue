<template>
  <div id="TodayQuize">
    <h2 class="title-wrap">
      <span class="title">
        오늘의 퀴즈
      </span>
      <span>
        |
      </span>
      <span class="sub-title">
        과학미를 높여줄 오늘의 퀴즈
      </span>
    </h2>

    <div>
      <quiz-item :quizID="quizID" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import QuizItem from "@/components/Quize/quiz-item.vue";

export default {
  name: "TodayQuize",
  components: {
    "quiz-item": QuizItem
  },
  data() {
    return {
      quizID: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
    computedUploadCheck() {
      this.fetchData();
      this.setQuizUpload({ upload: false });
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    getIsAuth() {
      return this.getUser.isAuth;
    }
  },
  methods: {
    ...mapActions(["quizzesGet", "setQuizUpload"]),
    async fetchData() {
      await this.getQuizIDs();
    },
    async getQuizIDs() {
      const res = await this.quizzesGet({
        limit: 100,
        skip: 0,
        point: false,
        participantCnt: true,
        sort: false
      });
      this.quizID = res.quizzes[0];
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/quiz/today-quize.scss";
</style>
