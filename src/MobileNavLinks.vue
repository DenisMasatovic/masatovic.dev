<template>
  <div
    class="slider"
    :class="{
      'slide-in': showMobileNav === true,
      'slide-out': showMobileNav === false,
    }"
    v-if="!isDesktopSize && navMenuEnabled"
  >
    <div class="links">
      <span
        @click="redirect('/projekte')"
        :class="currentRoute === '/projekte' ? 'selected' : ''"
        >Projekte</span
      >
      <span
        @click="redirect('/techstack')"
        :class="currentRoute === '/techstack' ? 'selected' : ''"
        >Tech-Stack</span
      >
      <span
        @click="redirect('/profil')"
        :class="currentRoute === '/profil' ? 'selected' : ''"
        >Profil</span
      >
      <span
        @click="redirect('/partner')"
        :class="currentRoute === '/partner' ? 'selected' : ''"
        >Partner</span
      >
      <MyButton
        :buttonClass="
          currentRoute === '/kontakt' ? 'staticPrimary' : 'secondary'
        "
        buttonText="Kontakt"
        @click="redirect('/kontakt')"
      ></MyButton>
    </div>
  </div>
</template>
<script>
import MyButton from "./shared/MyButton.vue";
export default {
  components: {
    MyButton,
  },

  watch: {
    showMobileNav: {
      handler() {
        this.$store.commit("setNavMenuEnableStatus", true);
      },
    },
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value.path;
    },
    showMobileNav: {
      get() {
        return this.$store.getters.showMobileNavigation;
      },
      set(value) {
        this.$store.commit("setShowMobileNavigation", value);
      },
    },
    isDesktopSize() {
      return window.innerWidth >= 1024;
    },
    navMenuEnabled() {
      return this.$store.getters.navMenuEnabled;
    },
  },
  methods: {
    redirect(route) {
      this.$router.push(route);
      this.showMobileNav = !this.showMobileNav;
      document.getElementById("burger").checked = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "./assets/sass/style.scss";

@keyframes slideIn {
  0% {
    clip-path: circle(0% at 0% 0%);
  }
  100% {
    clip-path: circle(150% at 0% 0%);
  }
}
@keyframes slideOut {
  0% {
    clip-path: circle(150% at 0% 0%);
  }
  100% {
    clip-path: circle(0% at 0% 0%);
  }
}
.slider {
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 10vh;
  left: 0;
  z-index: 100;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(181, 181, 181, 0) 100%,
      rgba(181, 181, 181, 0) 100%
    ),
    #171717;

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-top: 2rem;
    @media (min-width: $mobile) {
      padding-top: 5rem;
    }
    span {
      cursor: pointer;
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


.slide-in {
  animation: slideIn 0.5s forwards;
}

.slide-out {
  animation: slideOut 0.5s forwards;
}
</style>
