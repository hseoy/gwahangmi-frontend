<template>
  <div class="md-editor">
    <textarea
      class="md-viewer-cont input"
      ref="md-input"
      v-bind:value="mdText"
      v-on:input="updateValue($event.target.value)"
    ></textarea>
    <div
      class="md-viewer-cont preview md-post-content--wrap"
      v-html="previewText"
    ></div>
  </div>
</template>

<script>
const marked = require("marked");

export default {
  name: "md-editor",
  data() {
    return {
      mdText: "# Hello, 과학미"
    };
  },
  computed: {
    previewText() {
      return marked(this.mdText);
    }
  },
  methods: {
    updateValue(value) {
      this.mdText = value;
      this.$emit("input", this.previewText);
    },
    initValue() {
      this.mdText = "# Hello, 과학미";
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/post/post-content.scss";
@import "@/styles/gwahangmi/post/md-editor.scss";
</style>
