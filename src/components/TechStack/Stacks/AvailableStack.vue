<template>
  <div class="availableStackWrapper">
    <div class="headLine">
      <div>
        <div class="type-container">
          <span>{{ text }}</span>
          <ColorBubble
            v-for="i in 3"
            :key="i"
            :class="'bubble' + i + (index % 2 !== 0 ? '-reversed' : '')"
          ></ColorBubble>
        </div>
      </div>
    </div>
    <div
      class="techObjects"
      v-for="(row, rowIndex) in chunkedStack"
      :key="rowIndex"
      :class="{ marginTop: rowIndex !== 0 }"
    >
      <div
        v-for="(item, index) in row"
        :key="index"
        :ref="
          (el) => (stackObjects[rowIndex * (isMobileSize ? 2 : 4) + index] = el)
        "
      >
        <div class="stackObject">
          <img :src="item.logo" /><span>{{ item.technology }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontendStack from "@/data/FrontendStack";
import BackendStack from "@/data/BackendStack";
import DatabaseStack from "@/data/DatabaseStack";

import ColorBubble from "@/shared/ColorBubble.vue";
import StackType from "@/Types/StackType.js";

export default {
  props: ["text", "type", "assets", "index"],
  components: {
    ColorBubble,
  },

  computed: {
    stack() {
      const stackMap = {
        [StackType.FRONTEND]: this.frontendStack,
        [StackType.BACKEND]: this.backendStack,
        [StackType.DATABASE]: this.databaseStack,
      };
      return stackMap[this.type] || null;
    },
    chunkedStack() {
      let chunkSize = this.isMobileSize ? 2 : 4; // Change this value to control items per row
      let results = [];
      for (let i = 0; i < this.stack.length; i += chunkSize) {
        results.push(this.stack.slice(i, i + chunkSize));
      }
      return results;
    },
    isMobileSize() {
      return window.innerWidth < 768;
    },
  },
  mounted() {
    this.observeVisibility();
  },
  data() {
    return {
      stackObjects: [],
      observers: [],
      animationPlayed: [],
      stackType: StackType,
      frontendStack: FrontendStack,
      backendStack: BackendStack,
      databaseStack: DatabaseStack,
    };
  },

  methods: {
    observeVisibility() {
      this.stackObjects.forEach((stackObject, index) => {
        stackObject.style.opacity = 0;
        this.animationPlayed[index] = false; // initialize each flag to false
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!this.animationPlayed[index]) {
              // check the flag for the current element
              if (entry.isIntersecting) {
                stackObject.classList.add("fade-in-bottom");
                stackObject.style.animationDelay = `${index * 0.1}s`;
                this.animationPlayed[index] = true; // set the flag for the current element to true
              } else {
                stackObject.classList.remove("fade-in-bottom");
                stackObject.style.animationDelay = "0s";
              }
            }
          });
        });
        observer.observe(stackObject);
        this.observers.push(observer);
      });
    },
  },
  beforeUnmount() {
    this.observers.forEach((observer) => observer.disconnect());
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/sass/style.scss";
@keyframes scaleAnimation {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.availableStackWrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  .headLine {
    margin-bottom: 3rem;
    animation: scaleAnimation 0.5s ease-out;
    @media (max-width: $mobile) {
      margin-bottom: 4rem;
    }
    display: flex;
    justify-content: center;

    div {
      .type-container {
        position: relative;
        display: inline-block;
      }

      span {
        font-size: $font-size-xxl;
        position: relative;
        z-index: 1;

        @media (max-width: $mobile) {
          font-size: $font-size-lg;
        }
        font-weight: bold;
        text-align: center;
        width: fit-content;
      }
    }
    .bubble1 {
      width: 3.5rem;
      height: 3.5rem;
      top: -15%;
      left: -30%;
      @media (max-width: $tablet) {
        width: 3.5rem;
        height: 3.5rem;
        left: -5%;
        top: 10%;
      }
      @media (max-width: $mobile) {
        width: 2.5rem;
        height: 2.5rem;
        top: 15%;
        left: -15%;
      }
    }
    .bubble2 {
      width: 2.5rem;
      height: 2.5rem;
      top: -80%;
      right: 45%;
      @media (max-width: $tablet) {
        width: 2.5rem;
        height: 2.5rem;
      }
      @media (max-width: $mobile) {
        width: 2rem;
        height: 2rem;
        top: -90%;
        left: auto;
        right: 20%;
      }
    }
    .bubble3 {
      width: 2rem;
      height: 2rem;
      right: -10%;
      bottom: -30%;
      @media (max-width: $tablet) {
        width: 2rem;
        height: 2rem;
        right: -5%;
      }
      @media (max-width: $mobile) {
        width: 1.5rem;
        height: 1.5rem;
        right: -5%;
        bottom: -70%;
      }
    }
    .bubble1-reversed {
      width: 3.5rem;
      height: 3.5rem;
      top: -15%;
      right: -30%;
      @media (max-width: $tablet) {
        width: 3.5rem;
        height: 3.5rem;
        right: -5%;
        top: 10%;
      }
      @media (max-width: $mobile) {
        width: 2.5rem;
        height: 2.5rem;
        top: 22%;
        right: -15%;
      }
    }
    .bubble2-reversed {
      width: 2.5rem;
      height: 2.5rem;
      top: -80%;
      left: 45%;
      @media (max-width: $tablet) {
        width: 2.5rem;
        height: 2.5rem;
      }
      @media (max-width: $mobile) {
        width: 2rem;
        height: 2rem;
        top: -90%;
        left: 20%;
      }
    }
    .bubble3-reversed {
      width: 2rem;
      height: 2rem;
      left: -10%;
      bottom: -30%;
      @media (max-width: $tablet) {
        width: 2rem;
        height: 2rem;
        left: -5%;
      }
      @media (max-width: $mobile) {
        width: 1.5rem;
        height: 1.5rem;
        left: -5%;
        bottom: -70%;
      }
    }
  }
  .techObjects {
    display: flex;
    justify-content: center;
    gap: 10rem;
    @media (max-width: $tablet) {
      gap: 5rem;
    }
    @media (max-width: $mobile) {
      gap: 2rem;
    }
    .stackObject {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      object-fit: contain;
      img {
        height: 10vw;
        max-height: 200px;
        @media (max-width: $tablet) {
          height: 9vw;
          object-fit: contain;
        }
        @media (max-width: $mobile) {
          height: 20vw;
          object-fit: contain;
          min-width: 10rem;
        }
      }
      span {
        font-size: $font-size-lg;
        font-weight: bold;
      }
    }
  }
}
.marginTop {
  margin-top: 5rem;
  @media (max-width: $mobile) {
    margin-top: 2rem;
  }
}
</style>
