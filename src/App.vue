<template>
  <div id="app" :class="{ notScroll: isEditorOpen }">
    <router-view />
    <gwahangmi-footer />

    <button class="editor-trigger" @click="openPostEditor" v-if="getIsAuth">
      <span class="editor-trigger-text" data-title="나도 글쓰기!">
        과학을 좋아한다면?
      </span>
    </button>

    <post-editor
      v-if="getIsAuth"
      :height="computedEditorHeight"
      :display="computedEditorDisplay"
      v-on:close-editor="closePostEditor"
    ></post-editor>
  </div>
</template>

<script>
import GwahangmiFooter from "@/components/GwahangmiFooter/GwahangmiFooter.vue";
import PostEditor from "@/components/Posts/PostEditor.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    "gwahangmi-footer": GwahangmiFooter,
    "post-editor": PostEditor
  },
  data() {
    return {
      editorHeight: "0%",
      editorDisplay: "none",
      isEditorOpen: false
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
    }
  },
  methods: {
    openPostEditor() {
      this.editorHeight = "height: 100%";
      this.editorDisplay = "display: inline-block";
      this.isEditorOpen = true;
    },
    closePostEditor() {
      this.editorHeight = "height: 0%";
      this.editorDisplay = "display: none";
      this.isEditorOpen = false;
    }
  }
};
</script>

<style lang="scss">
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
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.3)));

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
