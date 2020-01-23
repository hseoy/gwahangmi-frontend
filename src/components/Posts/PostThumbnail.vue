<template>
  <div class="post-thumbnail">
    <div class="thumbnail-wrap" @click="goPostContent">
      <div class="thumbnail-img">
        <img :src="thumbnailImg" alt="thumbnail image" />
      </div>
      <div class="thumbnail-info-wrap">
        <div class="thumbnail-info">
          <p class="thumbnail-date">{{ getPostDate }}</p>
          <h3 class="thumbnail-title">{{ getPostTitle }}</h3>
        </div>
      </div>
    </div>
    <h3
      class="thumbnail-author"
      @click="showUserProfile"
      :title="getPostAuthorRank.title"
    >
      <span class="author-name">{{ getPostAuthor }}</span>
      <div class="author-rank">
        <img :src="getPostAuthorRank.img" alt="rank image" />
      </div>
    </h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "post-thumbnail",
  props: {
    postID: String
  },
  data() {
    return {
      post: null,
      postAuthorInfo: null,
      thumbnailImg:
        "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008",
      rank: [
        {
          title: "RANK_1:과 - 이제 겨우 한글자 배웠어요!",
          img: require("@/assets/rank_1.png")
        },
        {
          title: "RANK_2:학 - 한창 배울 나이랍니다ㅎㅎ",
          img: require("@/assets/rank_2.png")
        },
        {
          title: "RANK_3:미 - 과학의 아름다움을 깨우치다",
          img: require("@/assets/rank_3.png")
        }
      ]
    };
  },
  watch: {
    postID() {
      if (this.postID != undefined) {
        this.getPostInfo();
      }
    }
  },
  computed: {
    getPostDate() {
      if (this.post == null) {
        return "0000.00.00";
      }
      return (
        this.post.uploadDate.year +
        "." +
        this.post.uploadDate.month +
        "." +
        this.post.uploadDate.day
      );
    },
    getPostTitle() {
      if (this.post == null) {
        return "Hello, 과학미";
      }
      return this.post.title;
    },
    getPostAuthor() {
      if (this.post == null) {
        return "과학미";
      }
      return this.post.author;
    },
    getPostCategory() {
      if (this.post == null) {
        return null;
      }
      return this.post.category;
    },
    getPostAuthorRank() {
      if (this.postAuthorInfo == null) {
        return this.rank[0];
      }
      if (this.postAuthorInfo.point <= 20) {
        return this.rank[0];
      } else if (this.postAuthorInfo.point <= 40) {
        return this.rank[1];
      }
      return this.rank[2];
    }
  },
  methods: {
    ...mapActions(["postGet", "getUserInfoJust", "setNotice"]),
    showUserProfile() {
      if (this.postAuthorInfo == null) {
        this.setNotice({
          state: true,
          title: "로딩 중",
          body: "로딩 중입니다. 조금만 더 기다려주세요 ^^",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      }
      this.setNotice({
        state: true,
        title: "작성자 : " + this.getPostAuthor,
        body:
          "Point : " +
          this.postAuthorInfo.point +
          "<br>" +
          this.getPostAuthorRank.title,
        button: "확인",
        style: {
          height: "100%",
          display: "inline-block"
        }
      });
    },
    async getPostInfo() {
      if (this.postID != undefined) {
        const res = await this.postGet({ postID: this.postID });
        this.post = res;
        this.postAuthorInfo = await this.getUserInfoJust({
          uid: this.post.author
        });
      }
    },
    goPostContent() {
      if (this.postID != undefined && this.getPostCategory != null) {
        this.$router.push("/posts/" + this.getPostCategory + "/" + this.postID);
        return;
      }
      this.setNotice({
        state: true,
        title: "로딩 중",
        body: "글이 존재하지 않습니다. 조금만 기다려주세요",
        button: "확인",
        style: {
          height: "100%",
          display: "inline-block"
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/post/post-thumbnail.scss";
</style>
