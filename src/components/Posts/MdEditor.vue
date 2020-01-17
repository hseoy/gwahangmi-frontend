<template>
  <div class="md-editor">
    <textarea
      class="md-viewer-cont input"
      ref="md-input"
      v-bind:value="mdText"
      v-on:input="updateValue($event.target.value)"
    ></textarea>
    <div class="md-viewer-cont preview" v-html="previewText"></div>
  </div>
</template>

<script>
const marked = require("marked");

export default {
  name: "md-editor",
  props: {},
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
    }
  }
};
</script>

<style lang="scss">
.md-editor {
  height: calc(100% - 272px);
  position: relative;
  padding: 0 10px;

  .md-viewer-cont {
    width: 50%;
    height: 100%;
    border: 2px solid $color-accent;

    &.input {
      float: left;
      resize: none;
      padding: 20px;
      border-right: none;
    }

    &.preview {
      margin-left: 50%;
      width: 50%;
      height: 100%;
      padding: 20px;
      overflow: scroll;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: $font-accent;
        line-height: 1.25;
        margin-bottom: 16px;
        margin-top: 24px;
        padding-bottom: 0.3em;
      }

      h1,
      h2 {
        border-bottom: 1px solid #eaecef;
      }

      a {
        position: relative;
        color: $color-accent;
        text-decoration: none;

        &[href] {
          box-shadow: inset 0 -4px 0 $color-primary;
          transition: box-shadow 0.2s, color 0.2s;
        }

        &:hover {
          box-shadow: inset 0 -20px 0 $color-primary;
          color: $color-accent;
        }
      }

      ol,
      ul {
        display: block;

        li {
          display: list-item;

          li {
            margin-left: 40px;
          }
        }
      }

      input,
      textarea,
      select,
      button {
        font-family: $font-base;
      }

      img {
        max-width: 100%;
        vertical-align: middle;
        border: 0 none;
      }

      button {
        cursor: pointer;
        vertical-align: middle;
      }

      input,
      textarea {
        color: $color-accent;
        border-radius: 5px;
        padding: 15px;
        border: 1px solid #cfcfcf;
      }

      input {
        vertical-align: middle;
      }

      input::placeholder,
      textarea::placeholder {
        color: darken($color-accent, 60%);
      }

      blockquote {
        color: lighten($color-accent, 60%);
        border-left: 4px solid lighten($color-accent, 60%);
        padding-left: 20px;
        letter-spacing: -1px;
        font-style: italic;

        > :last-child {
          margin-bottom: 0;
        }
      }

      pre,
      code {
        font-family: Courier, $font-base;
        border-radius: 4px;
        background-color: #f6f8fa;
      }

      code {
        padding: 1px 5px;
      }

      pre {
        padding: 8px 12px;
        overflow-x: auto;

        > code {
          border: 0;
          padding-right: 0;
          padding-left: 0;
        }
      }
    }
  }
}
</style>
