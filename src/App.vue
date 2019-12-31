<template>
  <div id="app">
    <router-view />
    <gwahangmi-footer />
  </div>
</template>

<script>
import GwahangmiFooter from "./components/GwahangmiFooter/GwahangmiFooter.vue";
export default {
  name: "App",
  components: {
    "gwahangmi-footer": GwahangmiFooter
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/base.scss";
</style>
