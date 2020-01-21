<template>
  <div id="category">
    <gwahangmi-header
      :headTitle="getCategory"
      headSubTitle="과학미科學美:과학의 아름다움을 나누다"
    />

    <div class="content-wrap">
      <div class="content">
        <post-list-item
          v-for="postID in this.postIDs"
          :key="postID"
          :postID="postID"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import GwahangmiHeader from "../components/GwahangmiHeader/GwahangmiHeader.vue";
import PostListItem from "../components/Posts/PostListItem.vue";

export default {
  name: "category",
  components: {
    "gwahangmi-header": GwahangmiHeader,
    "post-list-item": PostListItem
  },
  data() {
    return {
      postIDs: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
    postIDs() {
      console.log(this.postIDs);
    }
  },
  computed: {
    getCategory() {
      return this.$route.params.category;
    }
  },
  methods: {
    ...mapActions(["postsGet"]),
    async fetchData() {
      await this.getPostIDs();
    },
    async getPostIDs() {
      const res = await this.postsGet({
        category: this.getCategory,
        limit: 12,
        skip: 0,
        popularity: false,
        total: false,
        average: false,
        sort: false
      });
      this.postIDs = res.posts;
    }
  }
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
