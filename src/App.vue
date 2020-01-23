<template>
  <div id="app" :class="{ notScroll: isEditorOpen }">
    <button class="go-home-button" @click="goHome" v-if="computedHomeButton">
      HOME으로
    </button>

    <router-view />
    <gwahangmi-footer />

    <button
      class="editor-trigger post"
      @click="openPostEditor"
      v-if="computedEditorTrigger"
    >
      <span class="editor-trigger-text" data-title="나도 글쓰기!">
        과학을 좋아한다면?
      </span>
    </button>

    <button
      class="editor-trigger quiz"
      @click="openQuizEditor"
      v-if="computedQuizEditorTrigger"
    >
      <span class="editor-trigger-text" data-title="나도 퀴즈 만들기">
        과학을 사랑한다면?
      </span>
    </button>

    <post-editor
      v-if="getIsAuth"
      :height="computedEditorHeight"
      :display="computedEditorDisplay"
      v-on:close-editor="closePostEditor"
    />
    <quiz-editor
      v-if="getIsAuth"
      :height="computedQuizEditorHeight"
      :display="computedQuizEditorDisplay"
      v-on:close-editor="closeQuizEditor"
    />
    <gwahangmi-notice />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GwahangmiNotice from "@/components/GwahangmiNotice/GwahangmiNotice.vue";
import GwahangmiFooter from "@/components/GwahangmiFooter/GwahangmiFooter.vue";
import PostEditor from "@/components/Posts/PostEditor.vue";
import QuizEditor from "./components/Quize/QuizEditor.vue";

export default {
  name: "App",
  components: {
    "gwahangmi-footer": GwahangmiFooter,
    "post-editor": PostEditor,
    "quiz-editor": QuizEditor,
    "gwahangmi-notice": GwahangmiNotice
  },
  data() {
    return {
      editorHeight: "0%",
      editorDisplay: "none",
      isEditorOpen: false,
      quizEditorHeight: "0%",
      quizEditorDisplay: "none",
      isQuizEditorOpen: false
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    getIsAuth() {
      return this.getUser.isAuth;
    },
    computedEditorHeight() {
      return this.editorHeight;
    },
    computedEditorDisplay() {
      return this.editorDisplay;
    },
    computedQuizEditorHeight() {
      return this.quizEditorHeight;
    },
    computedQuizEditorDisplay() {
      return this.quizEditorDisplay;
    },
    computedEditorTrigger() {
      if (this.getIsAuth) {
        if (
          this.$route.path === "/profile" ||
          this.$route.path === "/login" ||
          this.$route.path === "/signup" ||
          this.$route.path === "/quiz"
        ) {
          return false;
        }
        return true;
      }
      return false;
    },
    computedQuizEditorTrigger() {
      if (this.getIsAuth) {
        if (
          !(
            this.$route.path === "/" ||
            this.$route.path === "/rank" ||
            this.$route.path === "/quiz"
          )
        ) {
          return false;
        }
        return true;
      }
      return false;
    },
    computedHomeButton() {
      return !(this.$route.path === "/");
    }
  },
  methods: {
    openPostEditor() {
      this.editorHeight = "height: 100%";
      this.editorDisplay = "display: inline-block";
      this.isEditorOpen = true;
    },
    openQuizEditor() {
      this.quizEditorHeight = "height: 100%";
      this.quizEditorDisplay = "display: inline-block";
      this.isQuizEditorOpen = true;
    },
    closePostEditor() {
      this.editorHeight = "height: 0%";
      this.editorDisplay = "display: none";
      this.isEditorOpen = false;
    },
    closeQuizEditor() {
      this.quizEditorHeight = "height: 0%";
      this.quizEditorDisplay = "display: none";
      this.isquizEditorOpen = false;
    },
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss">
.go-home-button {
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px;
  background-color: $color-primary;
  color: $color-accent;
  font-family: $font-accent;
  font-size: 16px;
  padding: 10px 20px;
  border: 3px solid $color-accent;
  transition: 0.2s;
  z-index: 999;

  &:hover {
    background-color: $color-accent;
    color: $color-primary;
  }
}
.editor-trigger {
  font-family: $font-accent;
  font-size: 1.2em;
  width: 200px;
  height: 50px;
  position: fixed;
  top: 50%;
  margin-top: -25px;
  perspective: 400px;
  background-color: transparent;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.3)));

  &.post {
    right: 50px;
  }
  &.quiz {
    left: 50px;
  }

  span {
    display: block;
    position: relative;
    transition: 0.3s ease-in-out all;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    background-color: $color-primary;
    color: $color-accent;
    width: 100%;
    line-height: 42px;
    border: 3px solid $color-accent;
  }

  span:after {
    display: block;
    content: attr(data-title);
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s ease-in-out all;
    transform-origin: 50% 0;
    transform: translate3d(0px, 105%, 0px) rotateX(-90deg);
    background-color: $color-primary;
    color: $color-primary;
    width: 100%;
  }

  &:hover span {
    &:after {
      background-color: $color-accent;
    }
    transform: translate3d(0px, 0px, -30px) rotateX(90deg);
  }
}
@import "@/styles/gwahangmi/base.scss";
</style>
