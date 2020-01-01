<template>
  <div id="HighRanks">
    <h2 class="title">과학순위</h2>

    <div class="rank-wrap">
      <div class="rank 1">
        <div class="rank-num">1위</div>
        <div class="rank-user">USER-ID</div>
      </div>

      <div class="rank 2">
        <div class="rank-num">2위</div>
        <div class="rank-user">USER-ID</div>
      </div>

      <div class="rank 3">
        <div class="rank-num">3위</div>
        <div class="rank-user">USER-ID</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HighRanks"
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/rank/high-ranks.scss";
</style>
