<template>
  <div id="home">
    <gwahangmi-header />

    <div class="content-wrap">
      <div class="content">
        <popular-posts />
        <high-ranks />
        <today-quize />
      </div>
    </div>

    <button class="editor-trigger" @click="handleSavingContent">
      <span class="editor-trigger-text" data-title="나도 글쓰기!"
        >과학을 좋아한다면?</span
      >
    </button>
    <div class="editor-wrap">
      <div class="post-category"></div>
      <div class="post-title"></div>
      <vue-editor v-model="content"></vue-editor>
      <div class="post-upload-button-wrap"></div>
    </div>
    <div class="test post-content-wrap" v-html="content"></div>
  </div>
</template>

<script>
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import PopularPosts from "../components/Posts/PopularPosts.vue";
import HighRanks from "../components/Rank/HighRanks.vue";
import TodayQuize from "../components/Quize/todayQuize.vue";
import { VueEditor } from "vue2-editor";

export default {
  name: "home",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "popular-posts": PopularPosts,
    "high-ranks": HighRanks,
    "today-quize": TodayQuize,
    "vue-editor": VueEditor
  },
  data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  },
  methods: {
    handleSavingContent() {
      console.log(this.content);
    }
  }
};
</script>

<style lang="scss">
@import "~animate.css/animate.css";
#home {
  .content-wrap {
    width: 80%;
    max-width: 1240px;
    margin: 0 auto;

    .content {
      padding: 40px 40px 0px 40px;
    }
  }
  .editor-trigger {
    font-family: $font-accent;
    font-size: 1.2em;
    width: 200px;
    height: 50px;
    position: fixed;
    top: 50%;
    right: 50px;
    margin-top: -25px;
    perspective: 400px;
    background-color: transparent;
    -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
          bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.3)));

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
  .editor-wrap {
    width: 500px;
  }
  .post-content-wrap {
    ul[data-checked="false"] > li::before,
    ul[data-checked="true"] > li::before {
      font-size: 1.35em;
      vertical-align: baseline;
      bottom: -0.065em;
      font-weight: 900;
      color: #222;
    }

    ul[data-checked="false"] > li::before,
    ul[data-checked="true"] > li::before {
      color: #222;
      cursor: pointer;
      pointer-events: all;
    }
    ul li:not(.ql-direction-rtl) {
      padding-left: 1.5em;
      margin-left: 1.5em;
    }
    ul[data-checked="false"] > li::before {
      content: "\2610";
    }
    ul[data-checked="true"] > li::before {
      content: "\2611";
    }
    ul li:not(.ql-direction-rtl) {
      padding-left: 1.5em;
      margin-left: 1.5em;
    }
    li:not(.ql-direction-rtl)::before {
      margin-left: -1.5em;
      margin-right: 0.3em;
      text-align: right;
    }
  }
}
</style>
