<template>
  <div class="projectListWrapper" @mousemove="moveBubble">
    <div class="headLine">
      <div>Projekte</div>
    </div>
    <div class="projects">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :style="`--animation-delay: ${index * 0.1}s`"
      >
        <div
          :class="
            'project ' +
            (!isDesktopSize
              ? 'justify-center'
              : index % 2 === 0
              ? 'justify-start'
              : 'justify-end')
          "
        >
          <ImageGlasCard
            :cardTitle="project.name"
            :cardImagePaths="project.previewAssets"
            @click="goToProjectDetails(project)"
          ></ImageGlasCard>
          <ColorBubble
            v-for="i in 3"
            :key="i"
            :class="'bubble' + i + (index % 2 !== 0 ? '-reversed' : '')"
            :color="project.colorCode"
          ></ColorBubble>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageGlasCard from "../../shared/cards/ImageGlasCard.vue";
import ColorBubble from "@/shared/ColorBubble.vue";
import Projects from "../../data/Projects.js";
export default {
  components: {
    ImageGlasCard,
    ColorBubble,
  },
  computed: {
    isDesktopSize() {
      return window.innerWidth > 1024;
    },
  },

  data() {
    return {
      projects: Projects,
    };
  },

  methods: {
    moveBubble(event) {
      const bubbles = document.querySelectorAll('[class^="bubble"]');
      bubbles.forEach((bubble) => {
        const amount = bubble.getBoundingClientRect().width / 15;
        const x = (event.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (event.clientY - window.innerHeight / 2) / window.innerHeight;
        bubble.style.transform = `translate(${x * amount}px, ${y * amount}px)`;
      });
    },
    goToProjectDetails(project) {
      this.$router.push({
        name: "project-details",
        params: { id: project.id },
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
.projectListWrapper {
  padding: 0rem 5rem 4rem;
  @media (min-width: $big-desktop) {
    padding: 0rem 20rem 4rem;
  }
  @media (max-width: $tablet) {
    padding: 0rem 7rem 4rem;
  }
  @media (max-width: $mobile) {
    padding: 5% 1.5rem 8rem;
  }
  .headLine {
    margin-bottom: 4rem;
    @media (max-width: $mobile) {
      margin-bottom: 3rem;
    }
    div {
      font-size: $font-size-xxl;
      @media (max-width: $mobile) {
        font-size: $font-size-lg;
      }
      font-weight: bold;
      width: 100%;
      text-align: left;
    }
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    row-gap: 5rem;
    box-sizing: border-box;

    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
    @media (max-width: $mobile) {
      gap: 3rem;
    }
    .project {
      animation: scaleAnimation 0.5s ease-out;
      animation-delay: var(--animation-delay, 0s); // Use the CSS variable here
      position: relative;
    }

    .bubble1 {
      width: 8rem;
      height: 8rem;
      top: 25%;
      left: -7%;
      @media (max-width: $tablet) {
        width: 8rem;
        height: 8rem;
        left: -5%;
        top: 10%;
      }
      @media (max-width: $mobile) {
        width: 5.5rem;
        height: 5.5rem;
        top: 22%;
        left: -15%;
      }
    }
    .bubble2 {
      width: 9rem;
      height: 9rem;
      top: -20%;
      right: 15%;
      @media (max-width: $tablet) {
        width: 8rem;
        height: 8rem;
      }
      @media (max-width: $mobile) {
        width: 7.5rem;
        height: 7.5rem;
        top: -25%;
        left: auto;
        right: 0%;
      }
    }
    .bubble3 {
      width: 6rem;
      height: 6rem;
      bottom: -5%;
      right: 2%;
      @media (max-width: $tablet) {
        width: 6rem;
        height: 6rem;
        right: -5%;
      }
      @media (max-width: $mobile) {
        width: 4.5rem;
        height: 4.5rem;
        right: -5%;
        bottom: -10%;
      }
    }
    .bubble1-reversed {
      width: 8rem;
      height: 8rem;
      top: 25%;
      right: -7%;
      @media (max-width: $tablet) {
        width: 8rem;
        height: 8rem;
      }
      @media (max-width: $mobile) {
        width: 5.5rem;
        height: 5.5rem;
      }
    }
    .bubble2-reversed {
      width: 9rem;
      height: 9rem;
      top: -20%;
      left: 15%;
      @media (max-width: $tablet) {
        width: 8rem;
        height: 8rem;
      }
      @media (max-width: $mobile) {
        width: 7.5rem;
        height: 7.5rem;
      }
    }
    .bubble3-reversed {
      width: 6rem;
      height: 6rem;
      bottom: -5%;
      left: 2%;
      @media (max-width: $tablet) {
        width: 6rem;
        height: 6rem;
        left: -5%;
      }
      @media (max-width: $mobile) {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
  }
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}
.justify-end {
  display: flex;

  justify-content: flex-end;
}

.justify-center {
  display: flex;

  justify-content: center;
}
.scale-animation {
  animation: scaleAnimation 0.5s ease-out;
}
</style>
