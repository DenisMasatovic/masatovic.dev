<template>
  <div class="navBarWrapper" v-if="isDesktopSize">
    <div class="leftHalf">
      <span class="portfolioTitle" @click="$router.push('/')"
        >masatovic.dev</span
      >
    </div>
    <div class="rightHalf">
      <div class="links">
        <span
          @click="$router.push('/projekte')"
          :class="currentRoute === '/projekte' ? 'selected' : ''"
          >Projekte</span
        >
        <span
          @click="$router.push('/techstack')"
          :class="currentRoute === '/techstack' ? 'selected' : ''"
          >Tech-Stack</span
        >
        <span
          @click="$router.push('/profil')"
          :class="currentRoute === '/profil' ? 'selected' : ''"
          >Profil</span
        >
        <span
          @click="$router.push('/partner')"
          :class="currentRoute === '/partner' ? 'selected' : ''"
          >Partner</span
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
  <div v-if="!isDesktopSize" class="mobileNavBarWrapper">
    <div class="menu-icon">
      <input
        class="menu-icon__cheeckbox"
        type="checkbox"
        id="burger"
        v-model="showMobileNav"
      />
      <div @click="toggleMobileNav">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="mobilePortfolioTitleWrapper">
      <span class="portfolioTitle" @click="redirectToHome()"
        >masatovic.dev</span
      >
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
    isDesktopSize() {
      return window.innerWidth >= 1024;
    },
    showMobileNav: {
      get() {
        return this.$store.getters.showMobileNavigation;
      },
      set(value) {
        this.$store.commit("setShowMobileNavigation", value);
      },
    },
    navMenuEnabled() {
      return this.$store.getters.navMenuEnabled;
    },
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    redirectToHome() {
      this.$router.push("/");
      this.navMenuEnabled
        ? this.$store.commit("setShowMobileNavigation", false)
        : null;
      !this.isDesktopSize
        ? (document.getElementById("burger").checked = false)
        : null;
    },
  },
};
</script>
<style scoped lang="scss">
@import "./assets/sass/style.scss";

.navBarWrapper {
  padding: 3rem 5rem;

  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-height: 15vh;
  @media (min-width: $default-desktop) {
    padding: 3rem 10rem;
  }
  @media (min-width: $big-desktop) {
    max-height: 20vh;

    padding: 5rem 20rem;
  }
  .leftHalf {
    width: 30%;
    z-index: 1;
    display: flex;
  }
  .rightHalf {
    .links {
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
}
.mobileNavBarWrapper {
  display: flex;
  max-height: 10vh;
  padding: 10% 1.5rem;
  box-sizing: border-box;
  position: relative;
  :root {
    --bar-bg: #fff;
  }

  .menu-icon {
    position: absolute;
    top: 50%;
    width: 5%;
    height: 5%;
    cursor: pointer;
    margin-bottom: 5px;
    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }
    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--bar-bg, #fff);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
        }
      }
    }
  }
}
.mobilePortfolioTitleWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: $mobile) {
    justify-content: flex-end;
  }
}
.portfolioTitle {
  font-size: $font-size-xxxl;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: $mobile) {
    font-size: $font-size-xl;
  }
}
</style>
