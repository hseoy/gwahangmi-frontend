<template>
  <div class="PostThumbnail">
    <div class="thumbnail-wrap">
      <img
        class="thumbnail-img"
        src="{ thumbnail_img }"
        alt="thumbnail image"
      />
      <h3 class="thumbnail-date">2020.01.01</h3>
      <h3 class="thumbnail-title">title</h3>
    </div>
    <h3 class="thumbnail-author">
      <span class="author-name">Author</span>
      <span class="author-rank">Rank</span>
    </h3>
  </div>
</template>

<style lang="scss">
@import "@/styles/gwahangmi/post/post-thumbnail.scss";
</style>
