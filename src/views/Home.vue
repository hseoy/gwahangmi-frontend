<template>
  <div class="home">
    <gwahangmi-header />
    <h1>HELLO WORLD</h1>
  </div>
</template>

<script>
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
export default {
  name: "home",
  components: {
    "gwahangmi-header": GwahangmiHeader
  }
};
</script>
