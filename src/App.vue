<template>
  <NavBar></NavBar>
  <router-view />
  <MobileNavLinks></MobileNavLinks>
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
  },
};
</script>

<style lang="scss">
@import "./assets/sass/style.scss";
body {
  margin: 0;
}
#app {
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
</style>
