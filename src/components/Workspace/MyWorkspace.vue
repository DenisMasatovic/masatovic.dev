<template>
  <div class="workspace" @mousemove="moveBubble">
    <div class="cards">
      <div class="mainCard">
        <IconGlasCard
          cardClass="mainCard"
          cardTitle="Projekte"
          :cardIconPath="projectIcon"
          @click="$router.push('/projekte')"
        ></IconGlasCard>
      </div>
      <div class="subCards">
        <IconGlasCard
          cardClass="subCard"
          cardTitle="Tech-Stack"
          :cardIconPath="techStackIcon"
          @click="$router.push('/techstack')"
        ></IconGlasCard>
        <IconGlasCard
          cardClass="subCard"
          cardTitle="Profil"
          :cardIconPath="profileIcon"
          @click="$router.push('/profil')"
        ></IconGlasCard>
        <IconGlasCard
          cardClass="subCard"
          cardTitle="Partner"
          :cardIconPath="partnersIcon"
          @click="$router.push('/partner')"
        ></IconGlasCard>
        <IconGlasCard
          cardClass="subCard"
          cardTitle="Kontakt"
          :cardIconPath="contactIcon"
          @click="$router.push('/kontakt')"
        ></IconGlasCard>
      </div>
    </div>
    <ColorBubble v-for="i in 7" :key="i" :class="'bubble' + i"></ColorBubble>
  </div>
</template>
<script>
import IconGlasCard from "@/shared/cards/IconGlasCard.vue";
import ColorBubble from "@/shared/ColorBubble.vue";
export default {
  components: {
    IconGlasCard,
    ColorBubble,
  },

  data() {
    return {
      projectIcon:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_code.png?alt=media",
      techStackIcon:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_layers.png?alt=media",
      profileIcon:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_person.png?alt=media",
      partnersIcon:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_people.png?alt=media",
      contactIcon:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_mail.png?alt=media",
    };
  },
  methods: {
    moveBubble(event) {
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble) => {
        const amount = bubble.getBoundingClientRect().width / 15;
        const x = (event.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (event.clientY - window.innerHeight / 2) / window.innerHeight;
        bubble.style.transform = `translate(${x * amount}px, ${y * amount}px)`;
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";
@keyframes scaleAnimation {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.workspace {
  height: 80vh;
  padding: 2rem 5rem;

  @media (min-width: $default-desktop) {
    padding: 2rem 10rem;
  }
  @media (min-width: $big-desktop) {
    padding: 2rem 20rem;
  }
  box-sizing: border-box;
  @media (max-width: $tablet) {
    position: relative;
    overflow-x: hidden;
    overflow-y: visible;
    padding: 2rem 7rem;
  }
  @media (max-width: $mobile) {
    height: 90vh;
    padding: 1rem 1.5rem;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5rem;
    height: 100%;
    @media (min-width: $big-desktop) {
      height: 90%;
    }
    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    @media (max-width: $mobile) {
      display: flex;
      gap: 2.5rem;
    }
    .mainCard {
      @media (max-width: $tablet) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .mainCard {
        animation: scaleAnimation 0.5s ease-out;
        animation-delay: 0s;
      }
    }

    .subCards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 5rem;
      align-content: stretch;
      row-gap: 5rem;
      justify-items: flex-end;
      @media (max-width: $tablet) {
        justify-items: center;
        row-gap: 2.5rem;
        column-gap: 2.5rem;
      }
      @media (max-width: $mobile) {
        column-gap: 3rem;
        padding: 0;
        column-gap: 2rem;
      }

      .subCard:nth-child(1),
      .subCard:nth-child(3) {
        animation: scaleAnimation 0.5s ease-out;
        animation-delay: 0.1s;
      }

      .subCard:nth-child(2),
      .subCard:nth-child(4) {
        animation: scaleAnimation 0.5s ease-out;
        animation-delay: 0.2s;
      }
    }
  }

  .bubble1 {
    width: 15rem;
    height: 15rem;
    top: 5%;
    left: 1%;
    @media (min-width: $big-desktop) {
      left: 10%;
      top: 10%;
    }
    @media (min-width: $default-desktop) {
      left: 5%;
      top: 10%;
    }
    @media (max-width: $tablet) {
      width: 15rem;
      height: 15rem;
      left: -5%;
      top: 10%;
    }
    @media (max-width: $mobile) {
      width: 9rem;
      height: 9rem;
      top: 12%;
    }
  }
  .bubble2 {
    width: 12rem;
    height: 12rem;
    top: 25%;
    left: 25%;
    @media (min-width: $big-desktop) {
      left: 32%;
    }
    @media (min-width: $default-desktop) {
      left: 32%;
    }
    @media (max-width: $tablet) {
      width: 8rem;
      height: 8rem;
      top: 2%;
      left: auto;
      right: 30%;
    }
    @media (max-width: $mobile) {
      width: 5rem;
      height: 5rem;
      top: 8%;
      left: auto;
      right: 20%;
      top: 1%;
    }
  }
  .bubble3 {
    width: 10rem;
    height: 10rem;
    bottom: 5%;
    left: 3%;
    @media (min-width: $big-desktop) {
      left: 10%;
    }
    @media (min-width: $default-desktop) {
      left: 7%;
    }
    @media (max-width: $tablet) {
      width: 10rem;
      height: 10rem;
      bottom: auto;
      left: auto;
      right: -2%;
      top: 20%;
    }
    @media (max-width: $mobile) {
      width: 6rem;
      height: 6rem;
      right: -5%;
      top: 17%;
    }
  }
  .bubble4 {
    width: 13rem;
    height: 13rem;
    top: 50%;
    left: 40%;
    @media (min-width: $big-desktop) {
      left: 38%;
    }
    @media (max-width: $tablet) {
      width: 11rem;
      height: 11rem;
      left: 5%;
      top: 55%;
    }
    @media (max-width: $mobile) {
      width: 7rem;
      height: 7rem;
      left: -5%;
      top: 40%;
    }
  }
  .bubble5 {
    width: 11rem;
    height: 11rem;
    top: 10%;
    left: 55%;
    @media (max-width: $tablet) {
      width: 10rem;
      height: 10rem;
      bottom: 2%;
      top: auto;
      left: 25%;
    }
    @media (max-width: $mobile) {
      width: 6rem;
      height: 6rem;
      bottom: 22%;
      left: 20%;
    }
  }
  .bubble6 {
    width: 12rem;
    height: 12rem;
    bottom: 5%;
    left: 70%;
    @media (min-width: $big-desktop) {
      left: 63%;
    }
    @media (max-width: $tablet) {
      width: 10rem;
      height: 10rem;
      bottom: 43%;
      left: 40%;
    }
    @media (max-width: $mobile) {
      width: 6rem;
      height: 6rem;
      bottom: 57%;
      left: 42%;
    }
  }
  .bubble7 {
    width: 13rem;
    height: 13rem;
    top: 15%;
    right: 5%;
    @media (min-width: $big-desktop) {
      right: 10%;
    }
    @media (max-width: $tablet) {
      width: 6rem;
      height: 6rem;
      top: auto;
      bottom: 20%;
      right: 7%;
    }
    @media (max-width: $mobile) {
      width: 8rem;
      height: 8rem;
      right: -5%;
      bottom: 20%;
    }
  }
}
</style>
