<template>
  <div id="PopularPosts">
    <h2 class="title">인기글</h2>
    <post-thumbnail />
  </div>
</template>

<script>
import PostThumbnail from "./PostThumbnail.vue";

export default {
  name: "PopularPosts",
  components: {
    "post-thumbnail": PostThumbnail
  }
};
</script>

<style lang="scss">
#PopularPosts {
  display: block;
  background-color: red;

  .title {
    font-size: 35px;
  }
}
@import "@/styles/gwahangmi/post/popular-posts.scss";
</style>
