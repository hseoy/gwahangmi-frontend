<template>
  <div id="home">
    <gwahangmi-header />

    <div class="content-wrap">
      <div class="content">
        <popular-posts />
        <high-ranks />
      </div>
    </div>
  </div>
</template>

<script>
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import PopularPosts from "../components/Posts/PopularPosts.vue";
import HighRanks from "../components/Rank/HighRanks.vue";

export default {
  name: "home",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "popular-posts": PopularPosts,
    "high-ranks": HighRanks
  }
};
</script>

<style lang="scss">
#home{
  .content-wrap {
    width: 80%;
    margin: 0 auto;

    .content {
      padding: 0 40px;
    }
  }
}
</style>
