<template>
  <NavBar></NavBar>
  <router-view />
  <MobileNavLinks></MobileNavLinks>
  <div v-if="currentRoute === '/'">
    <img
      class="memoji fade-in-bottom"
      :src="desktopMemojiUrl"
      alt="Denis Masatovic"
      v-if="isDesktopSize"
    />
    <img
      class="memoji fade-in-bottom"
      :src="tabletMemojiUrl"
      alt="Denis Masatovic"
      v-if="isTabletSize && !isMobileSize"
    />
    <img
      class="memoji fade-in-bottom"
      :src="mobileMemojiUrl"
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
    desktopMemojiUrl() {
      return "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Flanding_page_desktop_memoji.png?alt=media";
    },
    tabletMemojiUrl() {
      return "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Flanding_page_tablet_memoji.png?alt=media";
    },
    mobileMemojiUrl() {
      return "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Flanding_page_mobile_memoji.png?alt=media";
    },
  },
};
</script>

<style lang="scss">
@import "./assets/sass/style.scss";
body {
  margin: 0;
}
html,
body {
  background-color: #171717;
}
#app {
  min-height: 100vh;
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
  
  @media (min-width: $big-desktop) {
    right: 15%;
  }

  @media (max-width: $mobile) {
    left: 0;
    height: 20rem;
  }
}
</style>
