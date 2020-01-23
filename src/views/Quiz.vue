<template>
  <div id="quiz">
    <gwahangmi-header
      headTitle="퀴즈Quiz"
      headSubTitle="과학미科學美:과학의 아름다움을 나누다"
    />

    <div class="content-wrap">
      <div class="content">
        <div
          style="
  width: 48%;
  float: left;"
          v-for="quizID in this.quizIDs"
          :key="quizID"
        >
          <quiz-item :quizID="quizID" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import QuizItem from "../components/Quize/quiz-item.vue";

export default {
  name: "quiz",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "quiz-item": QuizItem
  },
  data() {
    return {
      quizIDs: null
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
    ...mapGetters(["getQuiz"]),
    computedUploadCheck() {
      return this.getQuiz.upload;
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
      this.quizIDs = res.quizzes;
    }
  }
};
</script>

<style lang="scss">
#quiz {
  .content-wrap {
    width: 80%;
    max-width: 1240px;
    margin: 0 auto;

    .content {
      padding: 40px 40px 50px 40px;
      position: relative;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
