<template>
  <div class="post-thumbnail">
    <div class="thumbnail-wrap">
      <div class="thumbnail-img">
        <img :src="thumbnailImg" alt="thumbnail image" />
      </div>
      <div class="thumbnail-info-wrap">
        <div class="thumbnail-info">
          <p class="thumbnail-date">2020.01.01</p>
          <h3 class="thumbnail-title">{{ title }}</h3>
        </div>
      </div>
    </div>
    <h3 class="thumbnail-author">
      <span class="author-name">Author</span>
      <div class="author-rank" :title="rank[0].title">
        <img :src="rank[0].img" alt="rank image" />
      </div>
    </h3>
  </div>
</template>

<script>
export default {
  name: "post-thumbnail",
  props: {
    postID: String,
    title: String,
    thumbnailImg: String
  },
  data() {
    return {
      rank: [
        {
          title: "RANK_1:과",
          img: require("@/assets/rank_1.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/post/post-thumbnail.scss";
</style>
