<template>
  <div id="HighRanks">
    <h2 class="title-wrap">
      <span class="title">
        과학랭킹
      </span>
      <span>
        |
      </span>
      <span class="sub-title">
        과학미 넘치는 당신
      </span>
    </h2>

    <div class="rank-wrap">
      <div class="rank-pyramid">
        <div class="rank-zone"><span style="display:none;">1위</span></div>
        <div class="rank-zone"><span style="display:none;">2위</span></div>
        <div class="rank-zone"><span style="display:none;">3위</span></div>

        <div class="rank-content-wrap">
          <div class="rank-content-item-wrap">
            <div class="outter">
              <div class="inner">
                <div class="content-item">
                  <div class="rank-num swing">1위</div>
                  <div class="rank-user swing">USER-ID</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rank-content-item-wrap">
            <div class="outter">
              <div class="inner">
                <div class="content-item">
                  <div class="rank-num">2위</div>
                  <div class="rank-user">USER-ID</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rank-content-item-wrap">
            <div class="outter">
              <div class="inner">
                <div class="content-item">
                  <div class="rank-num">3위</div>
                  <div class="rank-user">USER-ID</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
