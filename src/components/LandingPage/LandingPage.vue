<template>
  <div class="heroSection">
    <div class="threedmodel">
      <ThreeDDesktop></ThreeDDesktop>
    </div>
    <div class="slogan">
      <span>Digitalisierung aus Leidenschaft.</span>
    </div>
    <img
      class="memoji"
      src="../../assets/images/landing_page_desktop_memoji.png"
      alt="Denis Masatovic"
    />
  </div>
</template>
<script>
import ThreeDDesktop from "./3DHeroSection/3DDesktop.vue";

export default {
  components: {
    ThreeDDesktop,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.heroSection {
  display: flex;
  height: 85vh;
  .threedmodel {
    position: absolute;
    margin-top: 7%;
  }
  .slogan {
    width: 90%;
    display: flex;
    justify-content: flex-end;

    span {
      margin-top: 10%;
      font-size: $font-size-xxl;
      font-weight: bold;
      width: 35%;
      text-align: start;
    }
  }
  .memoji {
    position: absolute;
    bottom: 0;
    right: 0%;
  }
}
</style>
