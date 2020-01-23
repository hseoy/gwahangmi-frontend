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

    <div class="quize-wrap">
      <div class="quize-content-wrap">
        <div class="quize-user">USER-ID</div>
        <div class="quize-content">
          <div class="quize-title">
            만유인력의 법칙을 발견한 과학자는 누구일까요?
          </div>
          <div class="quize-pass" v-if="pass">
            <div class="outter">
              <div class="inner">
                <h1 class="pass-title">
                  정답입니다! <span v-if="getIsAuth">+5</span>
                </h1>
                <div class="quize-login-wrap">
                  <a
                    href="javascript:void(0)"
                    class="quize-login"
                    @click="goLogin"
                    v-if="!getIsAuth"
                  >
                    로그인하고 더 많은 거 보러 가기!
                  </a>
                  <a
                    href="javascript:void(0)"
                    @click="goQuiz"
                    class="quize-login"
                    v-if="getIsAuth"
                  >
                    더 많은 거 보러 가기!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="quize-answers" v-if="!pass">
            <div class="quize-answer" @click="quizeAnswer(1)">
              <div class="outter">
                <div class="inner">
                  뉴턴
                </div>
              </div>
            </div>
            <div class="quize-answer" @click="quizeAnswer(2)">
              <div class="outter">
                <div class="inner">
                  스티브잡스
                </div>
              </div>
            </div>
            <div class="quize-answer" @click="quizeAnswer(3)">
              <div class="outter">
                <div class="inner">
                  유재석
                </div>
              </div>
            </div>
            <div class="quize-answer" @click="quizeAnswer(4)">
              <div class="outter">
                <div class="inner">
                  헬렌 켈러
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
import { mapGetters } from "vuex";

export default {
  name: "TodayQuize",
  data() {
    return {
      rightAnswer: 1,
      pass: false
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    getIsAuth() {
      return this.getUser.isAuth;
    }
  },
  methods: {
    quizeAnswer(answer) {
      if (answer === this.rightAnswer) {
        this.pass = true;
      } else {
        this.pass = false;
      }
    },
    goLogin() {
      this.$router.push("/login");
    },
    goQuiz() {
      this.$router.push("/quiz");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/quiz/today-quize.scss";
</style>
