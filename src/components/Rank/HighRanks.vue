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
                  <div class="rank-user swing">{{ getRank1 }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rank-content-item-wrap">
            <div class="outter">
              <div class="inner">
                <div class="content-item">
                  <div class="rank-num">2위</div>
                  <div class="rank-user">{{ getRank2 }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rank-content-item-wrap">
            <div class="outter">
              <div class="inner">
                <div class="content-item">
                  <div class="rank-num">3위</div>
                  <div class="rank-user">{{ getRank3 }}</div>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HighRanks",
  data() {
    return {
      rank: {
        fir: "",
        sec: "",
        thir: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $router: "fetchData"
  },
  computed: {
    ...mapGetters(["getRank"]),
    getRank1() {
      return this.getRank.top.fir;
    },
    getRank2() {
      return this.getRank.top.sec;
    },
    getRank3() {
      return this.getRank.top.thir;
    }
  },
  methods: {
    ...mapActions(["usersGet"]),
    ...mapActions(["userHighRankTop3"]),
    fetchData() {
      if (
        (this.rank.fir === "" || this.rank.sec === "", this.rank.thir === "")
      ) {
        this.getHighUser();
      }
    },
    async getHighUser() {
      const res = await this.usersGet({
        limit: 3,
        point: true,
        post: false,
        sort: false
      });
      this.userHighRankTop3({ users: res.users });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/rank/high-ranks.scss";
</style>
