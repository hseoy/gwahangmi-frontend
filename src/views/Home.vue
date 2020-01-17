<template>
  <div id="home">
    <gwahangmi-header />

    <div class="content-wrap">
      <div class="content">
        <popular-posts />
        <high-ranks />
        <today-quize />
      </div>
    </div>
  </div>
</template>

<script>
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import PopularPosts from "../components/Posts/PopularPosts.vue";
import HighRanks from "../components/Rank/HighRanks.vue";
import TodayQuize from "../components/Quize/todayQuize.vue";

export default {
  name: "home",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "popular-posts": PopularPosts,
    "high-ranks": HighRanks,
    "today-quize": TodayQuize
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~animate.css/animate.css";
#home {
  .content-wrap {
    width: 80%;
    max-width: 1240px;
    margin: 0 auto;

    .content {
      padding: 40px 40px 0px 40px;
    }
  }
}
</style>
