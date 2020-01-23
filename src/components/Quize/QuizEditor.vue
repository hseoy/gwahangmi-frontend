<template>
  <div class="editor-wrap-wrap">
    <div
      class="detail-background"
      :style="computedHeight"
      v-on:click="closeEditor"
    ></div>

    <div class="editor-wrap" :style="computedDisplay">
      <div class="quiz-main-title-wrap">
        <div class="main-title-wrap">
          <h1 class="quiz-main-title">퀴즈QUIZ</h1>
        </div>
      </div>
      <div class="quiz-title-input-wrap">
        <input class="quiz-title-input" type="text" v-model="quiz.title" />
      </div>
      <div class="quiz-content-input-wrap">
        <div class="quiz-answer-input-wrap answer1">
          <input
            class="quiz-answer-input"
            type="text"
            v-model="quiz.answers[0]"
          />
        </div>
        <div class="quiz-answer-input-wrap answer2">
          <input
            class="quiz-answer-input"
            type="text"
            v-model="quiz.answers[1]"
          />
        </div>
        <div class="quiz-answer-input-wrap answer3">
          <input
            class="quiz-answer-input"
            type="text"
            v-model="quiz.answers[2]"
          />
        </div>
        <div class="quiz-answer-input-wrap answer4">
          <input
            class="quiz-answer-input"
            type="text"
            v-model="quiz.answers[3]"
          />
        </div>
        <div class="quiz-answer-input-wrap right-answer">
          <div
            class="quiz-answer-num num1"
            @click="clickRightAnswer(1)"
            :style="computedStyleNum1"
          >
            1
          </div>
          <div
            class="quiz-answer-num num2"
            @click="clickRightAnswer(2)"
            :style="computedStyleNum2"
          >
            2
          </div>
          <div
            class="quiz-answer-num num3"
            @click="clickRightAnswer(3)"
            :style="computedStyleNum3"
          >
            3
          </div>
          <div
            class="quiz-answer-num num4"
            @click="clickRightAnswer(4)"
            :style="computedStyleNum4"
          >
            4
          </div>
        </div>
        <div class="quiz-answer-input-wrap explanation">
          <textarea
            v-model="quiz.explanation"
            name="quiz-explanation"
            class="quiz-explanation"
          ></textarea>
        </div>
        <div class="quiz-answer-input-wrap point">
          <div
            class="quiz-answer-num num1"
            @click="clickPoint(1)"
            :style="computedPointStyleNum1"
          >
            1
          </div>
          <div
            class="quiz-answer-num num2"
            @click="clickPoint(2)"
            :style="computedPointStyleNum2"
          >
            2
          </div>
          <div
            class="quiz-answer-num num3"
            @click="clickPoint(3)"
            :style="computedPointStyleNum3"
          >
            3
          </div>
          <div
            class="quiz-answer-num num4"
            @click="clickPoint(4)"
            :style="computedPointStyleNum4"
          >
            4
          </div>
          <div
            class="quiz-answer-num num5"
            @click="clickPoint(5)"
            :style="computedPointStyleNum5"
          >
            5
          </div>
        </div>
      </div>
      <div class="quiz-upload-button-wrap">
        <div class="outter">
          <div class="inner">
            <button class="quiz-upload-button" @click="quizCreate">
              퀴즈 생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "quiz-editor",
  components: {},
  props: {
    height: String,
    display: String
  },
  data() {
    return {
      quiz: {
        title: "만유인력의 법칙을 발견한 과학자는 누구일까요?",
        answers: ["뉴턴", "스티브잡스", "유재석", "헬렌 켈러"],
        rightAnswer: {
          num: 1,
          value: "뉴턴"
        },
        point: 1,
        explanation:
          "만유인력의 법칙(萬有引力-法則, 영어: law of universal gravity)이란 질량을 가진 물체사이의 중력끌림을 기술하는 물리학 법칙이다. 이 법칙은 아이작 뉴턴의 1687년 발표 논문 〈자연철학의 수학적 원리, 혹은 프린키피아(Principia)〉를 통해 처음 소개된 법칙이다.뉴턴은 이 법칙을 그의 운동의 제2법칙에 넣어 행성의 가속도를 구할 수 있었고, 이를 통해 행성의 궤도가 타원형임을 증명할 수 있었다. 더욱이 뉴턴은 중력이 행성의 진로 뿐만 아니라, 달의 세차 운동, 혜성의 운동, 은하수의 생성 및 빛의 굴절 등에도 적용되는 매우 일반적인 힘의 하나임을 인식하였다. 이것이 바로 뉴턴이 중력을 만유인력(universal force)라 부르게 된 이유이다."
      },
      num: [
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        }
      ],
      pointNum: [
        {
          style: {
            backgroundColor: "#000000",
            color: "#FFC400"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        },
        {
          style: {
            backgroundColor: "#FFC400",
            color: "#000000"
          }
        }
      ]
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $router: "fetchData",
    computedGetAnswer1() {
      if (this.quiz.rightAnswer.num != undefined) {
        this.setRightAnswer(this.quiz.rightAnswer.num);
      }
    },
    computedGetAnswer2() {
      if (this.quiz.rightAnswer.num != undefined) {
        this.setRightAnswer(this.quiz.rightAnswer.num);
      }
    },
    computedGetAnswer3() {
      if (this.quiz.rightAnswer.num != undefined) {
        this.setRightAnswer(this.quiz.rightAnswer.num);
      }
    },
    computedGetAnswer4() {
      if (this.quiz.rightAnswer.num != undefined) {
        this.setRightAnswer(this.quiz.rightAnswer.num);
      }
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    computedGetAnswer1() {
      return this.quiz.answers[0];
    },
    computedGetAnswer2() {
      return this.quiz.answers[1];
    },
    computedGetAnswer3() {
      return this.quiz.answers[2];
    },
    computedGetAnswer4() {
      return this.quiz.answers[3];
    },
    computedHeight() {
      return this.height;
    },
    computedDisplay() {
      return this.display;
    },
    getUID() {
      return this.getUser.uid;
    },
    computedStyleNum1() {
      return {
        backgroundColor: this.num[0].style.backgroundColor,
        color: this.num[0].style.color
      };
    },
    computedStyleNum2() {
      return {
        backgroundColor: this.num[1].style.backgroundColor,
        color: this.num[1].style.color
      };
    },
    computedStyleNum3() {
      return {
        backgroundColor: this.num[2].style.backgroundColor,
        color: this.num[2].style.color
      };
    },
    computedStyleNum4() {
      return {
        backgroundColor: this.num[3].style.backgroundColor,
        color: this.num[3].style.color
      };
    },
    computedPointStyleNum1() {
      return {
        backgroundColor: this.pointNum[0].style.backgroundColor,
        color: this.pointNum[0].style.color
      };
    },
    computedPointStyleNum2() {
      return {
        backgroundColor: this.pointNum[1].style.backgroundColor,
        color: this.pointNum[1].style.color
      };
    },
    computedPointStyleNum3() {
      return {
        backgroundColor: this.pointNum[2].style.backgroundColor,
        color: this.pointNum[2].style.color
      };
    },
    computedPointStyleNum4() {
      return {
        backgroundColor: this.pointNum[3].style.backgroundColor,
        color: this.pointNum[3].style.color
      };
    },
    computedPointStyleNum5() {
      return {
        backgroundColor: this.pointNum[4].style.backgroundColor,
        color: this.pointNum[4].style.color
      };
    }
  },
  methods: {
    ...mapActions(["preUploadQuiz", "setNotice"]),
    quizCreate() {
      this.preUploadQuiz({
        title: this.quiz.title,
        answers: this.quiz.answers,
        rightAnswer: this.quiz.rightAnswer.value,
        explanation: this.quiz.explanation
      });
      this.setNotice({
        state: true,
        title: "나도 퀴즈 만들기!",
        body: "퀴즈를 생성합니다",
        button: "확인",
        style: {
          height: "100%",
          display: "inline-block"
        }
      });
      this.quizDataInit();
      this.closeEditor();
    },
    fetchData() {
      this.clickRightAnswer(1);
    },
    setRightAnswer(n) {
      this.quiz.rightAnswer.num = n;
      this.quiz.rightAnswer.value = this.quiz.answers[n - 1];
    },
    clickRightAnswer(n) {
      this.setRightAnswer(n);
      this.num[n - 1].style.backgroundColor = "#000000";
      this.num[n - 1].style.color = "#FFC400";
      for (let i = 0; i < this.num.length; i++) {
        if (i != n - 1) {
          this.num[i].style.backgroundColor = "#FFC400";
          this.num[i].style.color = "#000000";
        }
      }
    },
    clickPoint(n) {
      this.quiz.point = n;
      this.pointNum[n - 1].style.backgroundColor = "#000000";
      this.pointNum[n - 1].style.color = "#FFC400";
      for (let i = 0; i < this.pointNum.length; i++) {
        if (i != n - 1) {
          this.pointNum[i].style.backgroundColor = "#FFC400";
          this.pointNum[i].style.color = "#000000";
        }
      }
    },
    closeEditor() {
      this.$emit("close-editor");
    },
    quizDataInit() {
      this.quiz.title = "만유인력의 법칙을 발견한 과학자는 누구일까요?";
      this.quiz.answers = ["뉴턴", "스티브잡스", "유재석", "헬렌 켈러"];
      this.quiz.rightAnswer.num = 1;
      this.quiz.rightAnswer.value = "뉴턴";
      this.quiz.explanation =
        "만유인력의 법칙(萬有引力-法則, 영어: law of universal gravity)이란 질량을 가진 물체사이의 중력끌림을 기술하는 물리학 법칙이다. 이 법칙은 아이작 뉴턴의 1687년 발표 논문 〈자연철학의 수학적 원리, 혹은 프린키피아(Principia)〉를 통해 처음 소개된 법칙이다.뉴턴은 이 법칙을 그의 운동의 제2법칙에 넣어 행성의 가속도를 구할 수 있었고, 이를 통해 행성의 궤도가 타원형임을 증명할 수 있었다. 더욱이 뉴턴은 중력이 행성의 진로 뿐만 아니라, 달의 세차 운동, 혜성의 운동, 은하수의 생성 및 빛의 굴절 등에도 적용되는 매우 일반적인 힘의 하나임을 인식하였다. 이것이 바로 뉴턴이 중력을 만유인력(universal force)라 부르게 된 이유이다.";
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/quiz/quiz-editor.scss";
</style>
