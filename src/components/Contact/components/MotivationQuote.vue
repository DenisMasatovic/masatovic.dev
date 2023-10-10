<template>
  <div class="motivationWrapper">
    <div class="quote">Lass uns Großes erreichen.</div>
    <div class="memojiHead">
      <img :src="memojiHeadUrl" />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    memojiHeadUrl() {
      return "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Fmemoji_head.png?alt=media";
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../../assets/sass/style.scss";

.motivationWrapper {
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: $big-desktop) {
    justify-content: flex-start;
  }
  .quote {
    font-size: $font-size-xl;
    font-weight: bold;
    width: 50%;
    text-align: start;
    @media (max-width: $mobile) {
      width: 80%;
    }
  }
  .memojiHead {
    position: absolute;
    right: 0%;
    @media (min-width: $big-desktop) {
      right: 15%;
    }
    @media (max-width: $mobile) {
      right: -20%;
      top: -100%;
      img {
        transform: scale(0.5);
      }
    }
  }
}
</style>
