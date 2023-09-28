<template>
  <div class="heroSection">
    <div class="threedmodel">
      <ThreeDDesktop v-if="isDesktopSize"></ThreeDDesktop>
      <ThreeDTablet v-if="isTabletSize && !isMobileSize"></ThreeDTablet>
      <ThreeDMobile v-if="isMobileSize"></ThreeDMobile>
    </div>
    <div class="slogan">
      <span>Digitalisierung aus Leidenschaft.</span>
    </div>
    
  </div>
</template>
<script>
import ThreeDDesktop from "./3DHeroSection/3DDesktop.vue";
import ThreeDTablet from "./3DHeroSection/3DTablet.vue";
import ThreeDMobile from "./3DHeroSection/3DMobile.vue";

export default {
  components: {
    ThreeDDesktop,
    ThreeDTablet,
    ThreeDMobile,
  },
  computed: {
    isDesktopSize() {
      return window.innerWidth > 1024;
    },
    isTabletSize() {
      return window.innerWidth <= 1024 && window.innerHeight > 768;
    },
    isMobileSize() {
      return window.innerWidth < 768;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.heroSection {
  display: flex;
  height: 85vh;
  @media (max-width: $tablet) {
    position: relative;
    overflow: hidden;
  }
 
  .threedmodel {
    position: absolute;
    top: 25%;
    @media (max-width: $tablet) {
      top: 15%;
    }
    @media (max-width: $mobile) {
      top: 15%;
      right: -5%;
      justify-content: center;
    }
  }
  .slogan {
    width: 90%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: $tablet) {
      width: 100%;
      justify-content: center;
    }
    @media (max-width: $mobile) {
      width: 100%;
      justify-content: center;
    }

    span {
      margin-top: 10%;
      font-size: $font-size-xxl;
      font-weight: bold;
      width: 35%;
      text-align: start;

      @media (max-width: $tablet) {
        width: 50%;
        text-align: center;
      }
      @media (max-width: $mobile) {
        width: 80%;
        text-align: end;
        font-size: $font-size-lg;
      }
    }
  }
  
}
</style>
