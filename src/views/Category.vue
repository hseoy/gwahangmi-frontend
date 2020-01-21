<template>
  <div id="category">
    <gwahangmi-header
      :headTitle="getCategory"
      headSubTitle="과학미科學美:과학의 아름다움을 나누다"
    />

    <div class="content-wrap">
      <div class="content">
        <post-list-item postID="1" />

        <post-list-item postID="2" />

        <post-list-item postID="3" />
      </div>
    </div>
  </div>
</template>

<script>
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import PostListItem from "../components/Posts/PostListItem.vue";

export default {
  name: "category",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "post-list-item": PostListItem
  },
  data() {
    return {};
  },
  computed: {
    getCategory() {
      return this.$route.params.category;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
#category {
  .content-wrap {
    width: 80%;
    max-width: 1240px;
    margin: 0 auto;

    .content {
      padding: 40px 40px 50px 40px;
    }
  }
}
</style>
