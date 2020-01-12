<template>
  <div
    id="PopularPosts"
    v-on:mouseover="stopSlides"
    v-on:mouseout="startSlides"
  >
    <h2 class="title-wrap">
      <span class="title">
        인기글
      </span>
      <span>
        |
      </span>
      <span class="sub-title">
        과학미 뿜뿜, 과학의 아름다움을 알린 오늘의 글
      </span>
    </h2>

    <div class="post-wrap">
      <div class="post-content">
        <div class="scene">
          <div class="cube" v-bind:class="getShowCubeSide">
            <div class="cube-face cube-face-left">
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title1"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title2"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title3"
              />
            </div>
            <div class="cube-face cube-face-front">
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title4"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title5"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title6"
              />
            </div>
            <div class="cube-face cube-face-right">
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title7"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title8"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title9"
              />
            </div>
            <div class="cube-face cube-face-back">
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title10"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title11"
              />
              <post-thumbnail
                thumbnailImg="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008"
                title="title12"
              />
            </div>
          </div>
        </div>
      </div>

      <a class="prev" v-on:click="minusSlides">&#10094;</a>
      <a class="next" v-on:click="plusSlides">&#10095;</a>
    </div>

    <div class="post-dots">
      <span
        class="dot"
        v-bind:class="{ 'dot-active': cubeSides.left }"
        v-on:click="currentSide(0)"
      ></span>
      <span
        class="dot"
        v-bind:class="{ 'dot-active': cubeSides.front }"
        v-on:click="currentSide(1)"
      ></span>
      <span
        class="dot"
        v-bind:class="{ 'dot-active': cubeSides.right }"
        v-on:click="currentSide(2)"
      ></span>
      <span
        class="dot"
        v-bind:class="{ 'dot-active': cubeSides.back }"
        v-on:click="currentSide(3)"
      ></span>
    </div>
  </div>
</template>

<script>
import PostThumbnail from "./PostThumbnail.vue";

export default {
  name: "PopularPosts",
  components: {
    "post-thumbnail": PostThumbnail
  },
  data() {
    return {
      sideIndex: 0,
      cubeSides: {
        left: true,
        front: false,
        right: false,
        back: false
      },
      cubeSidesName: ["left", "front", "right", "back"],
      autoSlide: true,
      playSlide: null,
      startSlide: null,
      stopSlide: null
    };
  },
  mounted() {
    this.autoSlides();
  },
  computed: {
    getShowCubeSide() {
      return {
        "show-front":
          this.cubeSides.front &&
          !this.cubeSides.right &&
          !this.cubeSides.back &&
          !this.cubeSides.left,
        "show-right":
          !this.cubeSides.front &&
          this.cubeSides.right &&
          !this.cubeSides.back &&
          !this.cubeSides.left,
        "show-back":
          !this.cubeSides.front &&
          !this.cubeSides.right &&
          this.cubeSides.back &&
          !this.cubeSides.left,
        "show-left":
          !this.cubeSides.front &&
          !this.cubeSides.right &&
          !this.cubeSides.back &&
          this.cubeSides.left
      };
    }
  },
  methods: {
    autoSlides() {
      this.startSlide = function() {
        this.playSlide = setInterval(this.plusSlides, 3000);
      };
      this.stopSlide = function() {
        clearInterval(this.playSlide);
      };
      if (this.autoSlide) {
        this.startSlides();
      } else {
        this.stopSlides();
      }
    },
    stopSlides() {
      this.autoSlide = false;
      this.stopSlide();
    },
    startSlides() {
      this.autoSlide = true;
      this.startSlide();
    },
    plusSlides() {
      this.showSides((this.sideIndex += 1));
    },
    minusSlides() {
      this.showSides((this.sideIndex += -1));
    },
    currentSide(n) {
      this.showSides((this.sideIndex = n));
    },
    showSides(n) {
      if (n == this.cubeSidesName.length) {
        this.sideIndex = 0;
      }
      if (n < 0) {
        this.sideIndex = this.cubeSidesName.length - 1;
      }

      this.cubeSides.left = false;
      this.cubeSides.front = false;
      this.cubeSides.right = false;
      this.cubeSides.back = false;

      switch (this.sideIndex) {
        case 0:
          this.cubeSides.left = true;
          break;
        case 1:
          this.cubeSides.front = true;
          break;
        case 2:
          this.cubeSides.right = true;
          break;
        case 3:
          this.cubeSides.back = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/post/popular-posts.scss";
</style>
