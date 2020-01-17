<template>
  <div class="editor-wrap-wrap">
    <div
      class="detail-background"
      :style="computedHeight"
      v-on:click="closeEditor"
    ></div>

    <div class="editor-wrap" :style="computedDisplay">
      <div class="post-category-wrap">
        <div class="post-category">
          <select
            v-model="post.category"
            require
            name="postCategory"
            class="postCategory"
          >
            <option value="" disabled selected>카테고리 선택</option>
            <option value="physics">카테고리:물리학</option>
            <option value="chemistry">카테고리:화학</option>
            <option value="geoscience">카테고리:지구과학</option>
            <option value="biology">카테고리:생물학</option>
          </select>
        </div>
      </div>

      <div class="post-title-input-wrap">
        <input class="post-title-input" type="text" v-model="post.title" />
      </div>
      <md-editor ref="mdEditor" v-model="post.content"></md-editor>

      <div class="post-upload-button-wrap">
        <div class="outter">
          <div class="inner">
            <button class="post-upload-button" v-on:click="postUpload">
              제출
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdEditor from "@/components/Posts/MdEditor.vue";

export default {
  name: "post-editor",
  components: {
    "md-editor": MdEditor
  },
  props: {
    height: String,
    display: String
  },
  data() {
    return {
      post: {
        category: "",
        title: "Hello, 과학미",
        content: "<h1>Hello, 과학미</h1>"
      },
      init: false
    };
  },
  computed: {
    computedHeight() {
      return this.height;
    },
    computedDisplay() {
      return this.display;
    }
  },
  methods: {
    closeEditor() {
      this.$emit("close-editor");
    },
    postUpload() {
      this.postDataInit();
      this.closeEditor();
    },
    postDataInit() {
      this.$refs.mdEditor.initValue();
      this.post.category = "";
      this.post.title = "Hello, 과학미";
      this.post.content = "<h1>Hello, 과학미</h1>";
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/post/post-editor.scss";
</style>
