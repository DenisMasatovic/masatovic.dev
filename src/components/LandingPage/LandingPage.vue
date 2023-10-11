<template>
  <div class="heroSection">
    <div class="threedmodel fade-in-bottom">
      <ThreeDDesktop v-if="isDesktopSize"></ThreeDDesktop>
      <ThreeDTablet v-if="isTabletSize && !isMobileSize"></ThreeDTablet>
      <ThreeDMobile v-if="isMobileSize"></ThreeDMobile>
    </div>
    <div class="slogan">
      <span class="staticText">{ Entwicklung </span>
      <VueWriter :array="['aus Leidenschaft. }']" :typeSpeed="50"> </VueWriter>
    </div>
  </div>
</template>
<script>
import ThreeDDesktop from "./3DHeroSection/3DDesktop.vue";
import ThreeDTablet from "./3DHeroSection/3DTablet.vue";
import ThreeDMobile from "./3DHeroSection/3DMobile.vue";
import VueWriter from "vue-writer";

export default {
  components: {
    ThreeDDesktop,
    ThreeDTablet,
    ThreeDMobile,
    VueWriter,
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
    width: 35%;
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    align-items: flex-start; 
    position: absolute;
    right: 10%;
    top: 25%;
    @media (max-width: $tablet) {
      position: unset;
      height: 25%;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: $mobile) {
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 15%;
    }

    .static-text-container,
    .typed-text-container {
      width: 100%;
    }

    span,
    .is-typed {
      margin-top: 1rem;
      font-size: $font-size-xxl;
      font-weight: bold;
      text-align: start;
      width: auto;

      @media (max-width: $tablet) {
        text-align: center;
      }

      @media (max-width: $mobile) {
        text-align: end;
        font-size: $font-size-lg;
      }
    }

    .typed-text-container {
      margin-top: 1rem; 
    }
  }
}
</style>
