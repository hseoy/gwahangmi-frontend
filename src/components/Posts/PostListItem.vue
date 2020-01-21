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
@import "@/styles/gwahangmi/post/post-list-item.scss";
</style>
