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
            id="postCategory"
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
      <md-editor v-model="post.content"></md-editor>

      <div class="post-upload-button-wrap">
        <div class="outter">
          <div class="inner">
            <button class="post-upload-button">
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
      }
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
    }
  }
};
</script>

<style lang="scss">
.editor-wrap-wrap {
  .detail-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 0%;
    background-color: rgba(0, 0, 0, 0.7);
    transition: 0.3s;
  }
  .editor-wrap {
    position: fixed;
    display: none;
    top: 50%;
    left: 50%;
    width: 80vw;
    height: 80vh;
    background-color: $color-white;
    border: 3px solid $color-accent;
    border-radius: 50px;
    margin-top: -40vh;
    margin-left: -40vw;

    .post-category-wrap {
      text-align: center;
      margin-top: 20px;

      .post-category {
        height: 50px;
        width: 200px;
        overflow: hidden;
        position: relative;
        border-radius: 3px;
        display: inline-block;

        &::after {
          content: "▼";
          position: absolute;
          right: 10px;
          top: 50%;
          margin-top: -9px;
          z-index: 1;
          text-align: center;
          width: 20px;
          height: 18px;
          pointer-events: none;
        }
        #postCategory {
          cursor: pointer;
          appearance: none;
          width: 200px;
          height: 50px;
          font-size: 15px;
          font-family: $font-accent;
          background-color: $color-primary;
          color: $color-accent;
          border: 3px solid $color-accent;
          text-align-last: center;
          position: relative;
        }
      }
    }
    .post-title-input-wrap {
      font-family: $font-accent;
      font-size: 28px;
      padding: 10px;
      margin: 20px 0;

      .post-title-input {
        outline: none;
        border: none;
        font-family: $font-accent;
        font-size: 28px;
        margin-left: 106.16px;
        display: block;
        width: calc(100% - 106.16px);
        border-bottom: 3px solid $color-accent;
      }

      &::before {
        content: "Title : ";
        padding-right: 24px;
        float: left;
      }
    }

    .post-upload-button-wrap {
      text-align: center;
      height: 100px;
      position: relative;

      .outter {
        display: table;
        width: 100%;
        height: 100%;
        .inner {
          vertical-align: middle;
          display: table-cell;

          .post-upload-button {
            background-color: $color-primary;
            border: 3px solid $color-accent;
            font-family: $font-accent;
            font-size: 20px;
            width: 200px;
            height: 50px;
            transition: 0.2s;

            &:hover {
              background-color: $color-accent;
              color: $color-primary;
            }
          }
        }
      }
    }
  }
}
</style>
