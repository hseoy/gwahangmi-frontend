<template>
  <div id="gwahangmiFooter">
    <div class="outter">
      <div class="inner">
        <p>
          Copyright 2020.
          <a
            class="author"
            target="_blank"
            rel="noopener"
            href="https://github.com/yunseo-h68"
            >Yunseo Hwang</a
          >. All rights reserved.
          <span v-if="!getIsAuth">Demo용 계정(testId, testPw)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GwahangmiFooter",
  computed: {
    ...mapGetters(["getUser"]),
    getIsAuth() {
      return this.getUser.isAuth;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/footer/footer.scss";
</style>
