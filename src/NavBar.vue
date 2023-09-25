<template>
  <div class="navBarWrapper">
    <div class="leftHalf">
      <span class="portfolioTitle" @click="$router.push('/')"
        >masatovic.dev</span
      >
    </div>
    <div class="rightHalf">
      <div class="links">
        <a
          href="/projekte"
          :class="currentRoute === '/projekte' ? 'selected' : ''"
          >Projekte</a
        >
        <a
          href="/techstack"
          :class="currentRoute === '/techstack' ? 'selected' : ''"
          >Tech-Stack</a
        >
        <a href="/profil" :class="currentRoute === '/profil' ? 'selected' : ''"
          >Profil</a
        >
        <a
          href="/partner"
          :class="currentRoute === '/partner' ? 'selected' : ''"
          >Partner</a
        >

        <MyButton
          :buttonClass="
            currentRoute === '/kontakt' ? 'staticPrimary' : 'secondary'
          "
          buttonText="Kontakt"
          @click="$router.push('/kontakt')"
        ></MyButton>
      </div>
    </div>
  </div>
</template>
<script>
import MyButton from "./shared/MyButton.vue";
export default {
  components: {
    MyButton,
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value.path;
    },
  },
};
</script>
<style scoped lang="scss">
@import "./assets/sass/style.scss";

.navBarWrapper {
  padding: 2rem 5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  .leftHalf {
    width: 30%;
    display: flex;
    .portfolioTitle {
      font-size: $font-size-xxxl;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .rightHalf {
    .links {
      a {
        color: #fff;
        text-decoration: none;
      }
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
    .selected {
      text-decoration: underline !important;
      font-weight: bold;
    }
  }
}
</style>
