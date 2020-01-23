<template>
  <div class="quiz-item">
    <div class="quize-wrap">
      <div class="quize-content-wrap">
        <div class="quize-user">{{ getQuizAuthor }}</div>
        <div class="quize-content">
          <div class="quize-title">
            {{ getQuizTitle }}
          </div>

          <div class="quize-answers">
            <div class="quiz-answer-wrap" v-if="!clickAnswer">
              <div class="quize-answer" @click="quizeAnswer(1)">
                <div class="outter">
                  <div class="inner">
                    {{ getQuizAnswers[0] }}
                  </div>
                </div>
              </div>
              <div class="quize-answer" @click="quizeAnswer(2)">
                <div class="outter">
                  <div class="inner">
                    {{ getQuizAnswers[1] }}
                  </div>
                </div>
              </div>
              <div class="quize-answer" @click="quizeAnswer(3)">
                <div class="outter">
                  <div class="inner">
                    {{ getQuizAnswers[2] }}
                  </div>
                </div>
              </div>
              <div class="quize-answer" @click="quizeAnswer(4)">
                <div class="outter">
                  <div class="inner">
                    {{ getQuizAnswers[3] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="quize-pass" v-if="clickAnswer">
              <div class="outter">
                <div class="inner">
                  <div v-if="!getExlanCheck">
                    <h1 class="pass-title">
                      <span v-if="pass">정답입니다!</span>
                      <span v-if="!pass">틀렸습니다!</span>
                      <span v-if="getIsAuth && pass">+{{ getQuizPoint }}</span>
                    </h1>
                    <div class="quize-login-wrap">
                      <a
                        href="javascript:void(0)"
                        class="quize-login"
                        @click="goLogin"
                        v-if="!getIsAuth"
                      >
                        <span v-if="pass">로그인하고 해설 보기!</span>
                        <span v-if="!pass">로그인하고 다시 풀어보기!</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="quize-login"
                        @click="showExplan"
                        v-if="getIsAuth"
                      >
                        <span v-if="pass">해설 보기!</span>
                        <span v-if="!pass">다시 풀어보기!</span>
                      </a>
                    </div>
                  </div>
                  <div class="quiz-explanation" v-if="getExlanCheck">
                    <div v-html="getQuizExplanation"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "QuizItem",
  props: {
    quizID: String
  },
  data() {
    return {
      quizInfo: null,
      rightAnswer: 1,
      pass: false,
      clickAnswer: false,
      explanCheck: false
    };
  },
  created() {
    if (this.quizID != undefined) {
      this.getQuizInfo();
      this.checkAnswer();
    }
  },
  watch: {
    quizID() {
      if (this.quizID != undefined) {
        this.getQuizInfo();
        this.checkAnswer();
      }
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    getIsAuth() {
      return this.getUser.isAuth;
    },
    getExlanCheck() {
      return this.explanCheck;
    },
    getQuizTitle() {
      if (this.quizInfo == null) {
        return "만유인력의 법칙을 발견한 과학자는 누구일까요?";
      }
      return this.quizInfo.title;
    },
    getQuizAnswers() {
      if (this.quizInfo == null) {
        return ["뉴턴", "스티브잡스", "유재석", "헬렌 켈러"];
      }
      return this.quizInfo.answers;
    },
    getQuizRIghtAnswer() {
      if (this.quizInfo == null) {
        return "뉴턴";
      }
      return this.quizInfo.rightAnswer;
    },
    getQuizExplanation() {
      if (this.quizInfo == null) {
        return "만유인력의 법칙(萬有引力-法則, 영어: law of universal gravity)이란 질량을 가진 물체사이의 중력끌림을 기술하는 물리학 법칙이다. 이 법칙은 아이작 뉴턴의 1687년 발표 논문 〈자연철학의 수학적 원리, 혹은 프린키피아(Principia)〉를 통해 처음 소개된 법칙이다.뉴턴은 이 법칙을 그의 운동의 제2법칙에 넣어 행성의 가속도를 구할 수 있었고, 이를 통해 행성의 궤도가 타원형임을 증명할 수 있었다. 더욱이 뉴턴은 중력이 행성의 진로 뿐만 아니라, 달의 세차 운동, 혜성의 운동, 은하수의 생성 및 빛의 굴절 등에도 적용되는 매우 일반적인 힘의 하나임을 인식하였다. 이것이 바로 뉴턴이 중력을 만유인력(universal force)라 부르게 된 이유이다.";
      }
      return this.quizInfo.explanation;
    },
    getQuizParticipantCnt() {
      if (this.quizInfo == null) {
        return 0;
      }
      return this.quizInfo.participantCnt;
    },
    getQuizPoint() {
      if (this.quizInfo == null) {
        return 0;
      }
      return this.quizInfo.point;
    },
    getQuizUploadDate() {
      if (this.quizInfo == null) {
        return "00.00.00";
      }
      return (
        this.quizInfo.uploadDate.year +
        "." +
        this.quizInfo.uploadDate.month +
        "." +
        this.quizInfo.uploadDate.day
      );
    },
    getQuizAuthor() {
      if (this.quizInfo == null) {
        return "과학미";
      }
      return this.quizInfo.author;
    }
  },
  methods: {
    ...mapActions(["quizGet"]),
    checkAnswer() {},
    quizeAnswer(answer) {
      this.clickAnswer = true;
      if (answer === this.rightAnswer) {
        this.pass = true;
      } else {
        this.pass = false;
      }
    },
    async getQuizInfo() {
      if (this.quizID != undefined) {
        const res = await this.quizGet({ quizID: this.quizID });
        this.quizInfo = res;
      }
    },
    goLogin() {
      this.$router.push("login");
    },
    showExplan() {
      if (!this.pass) {
        this.clickAnswer = false;
        return;
      }
      this.explanCheck = true;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/quiz/quiz-item.scss";
</style>
