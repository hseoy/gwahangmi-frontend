<template>
  <div id="rank">
    <gwahangmi-header
      headTitle="Top 100"
      headSubTitle="과학미科學美:과학의 아름다움을 나누다"
    />

    <div class="content-wrap">
      <div class="content">
        <div class="rank-wrap">
          <div class="rank-info-wrap">
            <div class="rank-info-title">
              <h1>&lt; Rank Top 100 &gt;</h1>
            </div>
            <div class="rank-info-desc">
              <p>최고의 과학미를 자랑하는 100명의 User들</p>
            </div>
          </div>
          <div class="rank-user-wrap">
            <ul class="rank-user-list">
              <li class="user-list-item">
                <div class="list-title list-wrap">
                  <div class="user-id-wrap">
                    <div class="user-num">랭킹</div>
                    <div class="user-id">ID</div>
                  </div>
                  <div class="user-info">
                    <div class="user-post-cnt">글 개수</div>
                    <div class="user-point">포인트</div>
                  </div>
                </div>
              </li>
              <div class="user-list-item-wrap">
                <li
                  class="user-list-item"
                  v-for="user in getUsers"
                  :key="user.uid"
                >
                  <rank-info :key="user.uid" :uid="user.uid" :num="user.num" />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RankInfo from "@/components/Rank/RankInfo.vue";
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import { mapActions } from "vuex";

export default {
  name: "rank",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "rank-info": RankInfo
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  computed: {
    getUsers() {
      return this.users;
    }
  },
  methods: {
    ...mapActions(["usersGet"]),
    async fetchData() {
      const res = await this.usersGet({
        limit: 100,
        point: true,
        post: false,
        sort: false
      });
      if (
        res == undefined ||
        res == null ||
        res.users == undefined ||
        res.users == null
      ) {
        return;
      }
      for (let i = 1; i <= res.users.length; i++) {
        const user = {
          num: i,
          uid: res.users[i - 1]
        };
        this.users.push(user);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/rank/rank.scss";
</style>
