<template>
  <NavBar></NavBar>
  <router-view />
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
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
  height: 100vh;  
}
</style>
