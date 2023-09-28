<template>
  <NavBar></NavBar>
  <router-view />
  <MobileNavLinks></MobileNavLinks>
  <div v-if="currentRoute === '/'">
    <img
      class="memoji"
      src="./assets/images/landing_page_desktop_memoji.png"
      alt="Denis Masatovic"
      v-if="isDesktopSize"
    />
    <img
      class="memoji"
      src="./assets/images/landing_page_tablet_memoji.png"
      alt="Denis Masatovic"
      v-if="isTabletSize && !isMobileSize"
    />
    <img
      class="memoji"
      src="./assets/images/landing_page_mobile_memoji.png"
      alt="Denis Masatovic"
      v-if="isMobileSize"
    />
  </div>
</template>

<script>
import MobileNavLinks from "./MobileNavLinks.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "App",
  components: { NavBar, MobileNavLinks },

  computed: {
    showMobileNav() {
      return this.$store.getters.showMobileNavigation;
    },
    isDesktopSize() {
      return window.innerWidth > 1024;
    },
    isTabletSize() {
      return window.innerWidth <= 1024 && window.innerHeight > 768;
    },
    isMobileSize() {
      return window.innerWidth < 768;
    },
    currentRoute() {
      return this.$router.currentRoute.value.path;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/sass/style.scss";
body {
  margin: 0;
}
#app {
  height: 100vh;
  font-family: "Anonymous";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(181, 181, 181, 0) 100%,
      rgba(181, 181, 181, 0) 100%
    ),
    #171717;
}
.memoji {
  position: absolute;
  bottom: 0;
  right: 0%;

  @media (max-width: $mobile) {
    left: 0;
    height: 20rem;
  }
}
</style>
