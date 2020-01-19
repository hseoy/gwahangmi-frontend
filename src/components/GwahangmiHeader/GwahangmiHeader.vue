<template>
  <div id="gwahangmiHeader">
    <div class="wrapper">
      <hgroup>
        <h1 class="gwahangmi-title">
          <a href="#">과학미科學美</a>
        </h1>
        <h2 class="gwahangmi-subtitle">
          과학의 아름다움을 나누는 커뮤니티
        </h2>
      </hgroup>
      <div class="sign-wrap" v-if="!getIsAuth">
        <a class="sign-in" href="javascript:void(0)" @click="goLogin">
          로그인
        </a>
        <a class="sign-up" href="javascript:void(0)" @click="goSignup">
          회원가입
        </a>
      </div>
      <div class="sign-ok" v-if="getIsAuth">
        <a class="sign-ok-profile" href="javascript:void(0)" @click="goProfile">
          <div class="profile-img">
            <img
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
              width="100%"
              alt="profile img"
            />
          </div>
          <div class="user-name">
            {{ getUname }}
          </div>
        </a>
      </div>
      <nav class="gnb-wrap">
        <div class="gnb">
          <div class="item-wrap">
            <a class="gnb-item" href="javascript:void(0)">카테고리</a>
            <div class="subitem-wrap">
              <a class="gnb-subitem" href="#">물리학</a>
              <a class="gnb-subitem" href="#">화학</a>
              <a class="gnb-subitem" href="#">지구과학</a>
              <a class="gnb-subitem" href="#">생물학</a>
            </div>
          </div>
          <div class="item-wrap">
            <a class="gnb-item" href="#">과학순위</a>
          </div>
          <div class="item-wrap">
            <a class="gnb-item" href="#">과학퀴즈</a>
          </div>
          <div class="item-wrap">
            <a class="gnb-item" href="#">과학토론</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "GwahangmiHeader",
  computed: {
    ...mapGetters(["getUser"]),
    getIsAuth() {
      return this.getUser.isAuth;
    },
    getUname() {
      return this.getUser.uname;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    goProfile() {
      this.$router.push("profile");
    },
    goLogin() {
      this.logout();
      this.$router.push("login");
    },
    goSignup() {
      this.logout();
      this.$router.push("signup");
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/gwahangmi/header/header.scss";
</style>
