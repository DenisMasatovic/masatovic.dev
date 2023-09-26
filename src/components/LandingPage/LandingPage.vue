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
      v-if="isDesktopSize"
    />
    <img
      class="memoji"
      src="../../assets/images/landing_page_tablet_memoji.png"
      alt="Denis Masatovic"
      v-if="isTabletSize && !isMobileSize"
    />
    <img
      class="memoji"
      src="../../assets/images/landing_page_mobile_memoji.png"
      alt="Denis Masatovic"
      v-if="isMobileSize"
    />
  </div>
</template>
<script>
import ThreeDDesktop from "./3DHeroSection/3DDesktop.vue";

export default {
  components: {
    ThreeDDesktop,
  },
  computed: {
    isDesktopSize() {
      return window.innerWidth >= 1024;
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
  .threedmodel {
    position: absolute;
    top: 25%;
    @media (max-width: $mobile) {
      top: 15%;
      right: 50%;
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
  .memoji {
    position: absolute;
    bottom: 0;
    right: 0%;

    @media (max-width: $mobile) {
      left: 0;
    }
  }
}
</style>
