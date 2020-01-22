<template>
  <div class="post-list-item">
    <div class="post-info-wrap">
      <div class="category">{{ getCategory }}</div>
      <div class="upload-date">{{ getPostDate }}</div>
      <div class="author">작성자: {{ getPostAuthor }}</div>
      <div class="point">총점 : {{ getPostTotalPoint }}</div>
      <div class="point">평균 : {{ getPostAveragePoint }}</div>
    </div>
    <div class="post-title-wrap">
      <h2 class="post-title" @click="goPostContent">{{ getPostTitle }}</h2>
    </div>
    <div class="open-point-wrap" :style="computedStyleOpenPostPoint">
      <button class="open-btn" @click="openPointWrap">
        {{ getOpenPointWrapButtonTitle }}
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
        <button class="post-point-submit" @click="postPointSubmit">
          평가하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "post-list-item",
  props: {
    postID: String
  },
  data() {
    return {
      postLastPoint: -1,
      postInfo: null,
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
  created() {
    if (this.postID != undefined) {
      this.getPostInfo();
      this.setPoint();
    }
  },
  watch: {
    postID() {
      if (this.postID != undefined) {
        this.getPostInfo();
        this.setPoint();
      }
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    getOpenPointWrapButtonTitle() {
      if (!this.getUser.isAuth) {
        return "로그인하고 이 글 평가하기";
      }
      if (this.getUser.uid === this.getPostAuthor) {
        return "이 글이 내 글이다!";
      }
      if (this.postLastPoint >= 0) {
        return "내 점수 : " + this.postLastPoint;
      }
      return "이 글은 얼마나 과학미스럽나요?";
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
    },
    getCategory() {
      return this.$route.params.category;
    },
    getPostDate() {
      if (this.postInfo == null) {
        return "0000.00.00";
      }
      return (
        this.postInfo.uploadDate.year +
        "." +
        this.postInfo.uploadDate.month +
        "." +
        this.postInfo.uploadDate.day
      );
    },
    getPostTitle() {
      if (this.postInfo == null) {
        return "Hello, 과학미";
      }
      return this.postInfo.title;
    },
    getPostAuthor() {
      if (this.postInfo == null) {
        return "과학미";
      }
      return this.postInfo.author;
    },
    getPostTotalPoint() {
      if (this.postInfo == null) {
        return 0;
      }
      return this.postInfo.totalPoint;
    },
    getPostAveragePoint() {
      if (this.postInfo == null) {
        return 0;
      }
      return this.postInfo.averagePoint.toFixed(2);
    },
    getPostPointClass() {
      if (this.getPostAveragePoint == 5.0) {
        return '"미 - 과학의 아름다움을 일깨워주는 글!"';
      } else if (this.getPostAveragePoint > 3) {
        return '"학 - 과학을 배우는 재미를 알려주는 글!"';
      }
      return '"과 - 일단 한 글자부터 시작하는 글!"';
    }
  },
  methods: {
    ...mapActions([
      "postGet",
      "pointGet",
      "pointPost",
      "setNotice",
      "pointGet"
    ]),
    async setPoint() {
      if (this.getUser.uid) {
        const point = await this.pointGet({
          postID: this.postID,
          uid: this.getUser.uid
        });
        this.postLastPoint = point.point;
        return;
      }
      this.postLastPoint = -1;
    },
    async postPointSubmit() {
      const pointResponse = await this.pointPost({
        postID: this.postID,
        uid: this.getUser.uid,
        point: parseInt(this.post.point)
      });
      this.getPostInfo();
      if (pointResponse.isSuccess) {
        await this.setPoint();
      }
      this.closePointWrap();
    },
    async getPostInfo() {
      if (this.postID != undefined) {
        const res = await this.postGet({ postID: this.postID });
        this.postInfo = res;
      }
    },
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
      if (!this.getUser.isAuth) {
        this.setNotice({
          state: true,
          title: "로그인",
          body: "로그인하면 이 글이 얼마나 과학미스러운지 평가할 수 있습니다!",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
        return;
      }
      if (this.getUser.uid === this.getPostAuthor) {
        this.setNotice({
          state: true,
          title: "이 글이 내 글이다!",
          body:
            "현재 과학미 Point 총점 : " +
            this.getPostTotalPoint +
            "<br>" +
            "현재 과학미 Point 평점 : " +
            this.getPostAveragePoint +
            "<br>" +
            "과학미 평가 : " +
            this.getPostPointClass,
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
        return;
      }
      if (this.postLastPoint >= 0) {
        this.setNotice({
          state: true,
          title: "이 글의 과학미 점수는",
          body:
            "현재 과학미 Point 총점 : " +
            this.getPostTotalPoint +
            "<br>" +
            "현재 과학미 Point 평점 : " +
            this.getPostAveragePoint +
            "<br>" +
            "과학미 평가 : " +
            this.getPostPointClass +
            "<br>" +
            this.getOpenPointWrapButtonTitle,
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
        return;
      }
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
    },
    goPostContent() {
      const path = "/posts/" + this.getCategory + "/" + this.postID;
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/post/post-list-item.scss";
</style>
