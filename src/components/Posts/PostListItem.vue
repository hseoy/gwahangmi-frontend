<template>
  <div class="post-list-item">
    <div class="post-info-wrap">
      <div class="category">{{ getCategory }}</div>
      <div class="upload-date">2020.01.22</div>
      <div class="author">USER-ID</div>
    </div>
    <div class="post-title-wrap">
      <h2 class="post-title">Hello, 과학미</h2>
    </div>
    <div class="open-point-wrap" :style="computedStyleOpenPostPoint">
      <button class="open-btn" @click="openPointWrap">
        이 글은 얼마나 과학미스럽나요?
      </button>
    </div>
    <div class="point-wrap" :style="computedStyle">
      <button class="close-point-wrap-btn" @click="closePointWrap">
        &times;
      </button>
      <input
        type="radio"
        name="postPoint"
        :id="'postPoint0_' + postID"
        class="screen-out"
        v-model="post.point"
        value="0"
      />
      <label
        :for="'postPoint0_' + postID"
        class="post-point-label"
        :style="computedStyleLabel0"
        @click="changePostPoint(0)"
      >
        0점
      </label>
      <input
        type="radio"
        name="postPoint"
        :id="'postPoint1_' + postID"
        class="screen-out"
        v-model="post.point"
        value="1"
      />
      <label
        :for="'postPoint1_' + postID"
        class="post-point-label"
        :style="computedStyleLabel1"
        @click="changePostPoint(1)"
      >
        1점
      </label>
      <input
        type="radio"
        name="postPoint"
        :id="'postPoint2_' + postID"
        class="screen-out"
        v-model="post.point"
        value="2"
      />
      <label
        :for="'postPoint2_' + postID"
        class="post-point-label"
        :style="computedStyleLabel2"
        @click="changePostPoint(2)"
      >
        2점
      </label>
      <input
        type="radio"
        name="postPoint"
        :id="'postPoint3_' + postID"
        class="screen-out"
        v-model="post.point"
        value="3"
      />
      <label
        :for="'postPoint3_' + postID"
        class="post-point-label"
        :style="computedStyleLabel3"
        @click="changePostPoint(3)"
      >
        3점
      </label>
      <input
        type="radio"
        name="postPoint"
        :id="'postPoint4_' + postID"
        class="screen-out"
        v-model="post.point"
        value="4"
      />
      <label
        :for="'postPoint4_' + postID"
        class="post-point-label"
        :style="computedStyleLabel4"
        @click="changePostPoint(4)"
      >
        4점
      </label>
      <input
        type="radio"
        name="postPoint"
        :id="'postPoint5_' + postID"
        class="screen-out"
        v-model="post.point"
        value="5"
      />
      <label
        :for="'postPoint5_' + postID"
        class="post-point-label"
        :style="computedStyleLabel5"
        @click="changePostPoint(5)"
      >
        5점
      </label>
      <div class="post-point-result">
        <div class="post-point-user">내 점수 : {{ post.point }}</div>
        <button class="post-point-submit">평가하기</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "post-list-item",
  props: {
    postID: String
  },
  data() {
    return {
      post: {
        point: 0
      },
      postPointStyle: {
        height: "0px",
        padding: "0px",
        margin: "0px",
        border: "none"
      },
      openPostPointStyle: {
        height: "61px",
        padding: "10px 0"
      },
      label: [
        {
          backgroundColor: "#000000",
          color: "#FFC400"
        },
        {
          backgroundColor: "#FFC400",
          color: "#000000"
        },
        {
          backgroundColor: "#FFC400",
          color: "#000000"
        },
        {
          backgroundColor: "#FFC400",
          color: "#000000"
        },
        {
          backgroundColor: "#FFC400",
          color: "#000000"
        },
        {
          backgroundColor: "#FFC400",
          color: "#000000"
        }
      ]
    };
  },
  computed: {
    getCategory() {
      return this.$route.params.category;
    },
    computedStyleOpenPostPoint() {
      return {
        height: this.openPostPointStyle.height,
        padding: this.openPostPointStyle.padding
      };
    },
    computedStyle() {
      return {
        height: this.postPointStyle.height,
        padding: this.postPointStyle.padding,
        margin: this.postPointStyle.margin,
        border: this.postPointStyle.border
      };
    },
    computedStyleLabel0() {
      return {
        backgroundColor: this.label[0].backgroundColor,
        color: this.label[0].color
      };
    },
    computedStyleLabel1() {
      return {
        backgroundColor: this.label[1].backgroundColor,
        color: this.label[1].color
      };
    },
    computedStyleLabel2() {
      return {
        backgroundColor: this.label[2].backgroundColor,
        color: this.label[2].color
      };
    },
    computedStyleLabel3() {
      return {
        backgroundColor: this.label[3].backgroundColor,
        color: this.label[3].color
      };
    },
    computedStyleLabel4() {
      return {
        backgroundColor: this.label[4].backgroundColor,
        color: this.label[4].color
      };
    },
    computedStyleLabel5() {
      return {
        backgroundColor: this.label[5].backgroundColor,
        color: this.label[5].color
      };
    }
  },
  methods: {
    changePostPoint(n) {
      this.checkedLabel(n);
      for (let i = 0; i < this.label.length; i++) {
        if (n != i) {
          this.unCheckedLabel(i);
        }
      }
    },
    checkedLabel(n) {
      this.label[n].backgroundColor = "#000000";
      this.label[n].color = "#FFC400";
    },
    unCheckedLabel(n) {
      this.label[n].backgroundColor = "#FFC400";
      this.label[n].color = "#000000";
    },
    openPointWrap() {
      this.openPostPointStyle.height = "0px";
      this.openPostPointStyle.padding = "0px";
      this.postPointStyle.height = "116px";
      this.postPointStyle.padding = "10px 0";
      this.postPointStyle.margin = "10px 0";
      this.postPointStyle.border = "3px solid #000000";
    },
    closePointWrap() {
      this.openPostPointStyle.height = "61px";
      this.openPostPointStyle.padding = "10px 0";
      this.postPointStyle.height = "0px";
      this.postPointStyle.padding = "0px";
      this.postPointStyle.margin = "0px";
      this.postPointStyle.border = "none";
    }
  }
};
</script>

<style lang="scss">
.post-list-item {
  border: 4px solid $color-accent;
  background-color: $color-primary;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 20px 0;

  .post-info-wrap {
    text-align: center;
    position: relative;

    .upload-date,
    .author {
      display: inline-block;
      color: $color-accent;
      font-family: $font-accent;
      margin: 0 10px;
      padding: 2.5px 5px;
    }

    .category {
      position: absolute;
      top: 0;
      left: 0;
      color: $color-accent;
      font-family: $font-accent;
      margin: 0 10px;
      padding: 2.5px 5px;
    }
  }

  .post-title-wrap {
    border: 3px solid $color-primary;
    text-align: center;
    padding: 10px 0;
    margin: 10px 0;

    .post-title {
      font-family: $font-accent;
      letter-spacing: 10px;
      padding: 5px 5px 5px 15px;
      font-size: 25px;
      display: inline-block;
      box-shadow: inset 0 -4px 0 $color-accent;
      transition: box-shadow 0.3s, color 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: inset 0 -45px 0 $color-accent;
        color: $color-primary;
      }
    }
  }
  .open-point-wrap {
    text-align: center;
    padding: 10px 0;
    overflow: hidden;
    transition: 0.3s;
    .open-btn {
      border: 3px solid $color-accent;
      background-color: $color-primary;
      font-family: $font-accent;
      color: $color-accent;
      font-size: 20px;
      transition: 0.3s;
      padding: 5px 10px;

      &:hover {
        background-color: $color-accent;
        color: $color-primary;
      }
    }
  }
  .point-wrap {
    box-sizing: border-box;
    text-align: center;
    padding: 10px 0;
    border: 3px solid $color-accent;
    border-radius: 30px;
    margin: 10px 0;
    height: 116px;
    overflow: hidden;
    transition: 0.3s;
    position: relative;

    .close-point-wrap-btn {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 20px;
      margin-top: 10px;
      font-family: $font-accent;
      color: $color-accent;
      font-size: 18px;
      background-color: transparent;
    }
    .post-point-label {
      border: 3px solid $color-accent;
      background-color: $color-primary;
      padding: 5px 10px;
      font-family: $font-accent;
      font-size: 18px;
      color: $color-accent;
      margin: 0 5px;
      transition: 0.3s;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background-color: $color-accent;
        color: $color-primary;
      }
    }
    .post-point-result {
      margin-top: 20px;
      .post-point-user,
      .post-point-submit {
        border: $color-accent;
        background-color: $color-primary;
        padding: 5px 10px;
        font-family: $font-accent;
        font-size: 18px;
        color: $color-accent;
        margin: 0 5px;
        display: inline-block;
        transition: 0.2s;
      }
      .post-point-user {
        user-select: none;
      }
      .post-point-submit {
        &:hover {
          background-color: $color-accent;
          color: $color-primary;
        }
      }
    }
  }
}
</style>
