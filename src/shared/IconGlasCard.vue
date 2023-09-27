<template>
  <div :class="'card' + ' ' + cardClass">
    <div class="cardTitle">{{ cardTitle }}</div>
    <div class="cardIcon">
      <img :src="cardIconPath" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["cardClass", "cardTitle", "cardIconPath"],
};
</script>
<style scoped lang="scss">
@import "../assets/sass/style.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-image: linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 1.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("../assets/images/frost.png");
  //background-size: cover; /* This will scale the image to cover the entire element */
  background-repeat: repeat; /* This will prevent the image from repeating */
  border: 1px solid rgba(183, 183, 183, 0.4);
  border-radius: 25px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 10;
  position: relative;
  transition: transform 0.3s ease; /* Add transition effect for smooth scaling */
  cursor: pointer;
  &:hover {
    transform: scale(1.1); /* Scale the size of the card by 20% on hover */

    .cardTitle,
    .cardIcon {
      transition: 0.3s ease;
      opacity: 1;
    }
  }
}
.mainCard {
  padding: 2rem;
  height: 500px;
  width: 350px;

  @media (max-width: $tablet) {
    height: 200px;
    width: 100%;
    padding: 1.5rem;
  }
  @media (max-width: $mobile) {
    padding: 1rem;
    height: 150px;
  }
  .cardTitle {
    font-size: $font-size-xxl;
    font-weight: bold;
    opacity: 70%;
    @media (max-width: $mobile) {
      font-size: $font-size-lg;
    }
  }
  .cardIcon {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    opacity: 70%;
    @media (max-width: $tablet) {
      height: 70%;
      img {
        width: 70px;
        @media (max-width: $mobile) {
          width: 70px;
        }
      }
    }
  }
}

.subCard {
  padding: 1.5rem;
  height: 200px;
  width: 320px;

  @media (max-width: $tablet) {
    height: 125px;
    width: 100%;
  }
  @media (max-width: $mobile) {
    padding: 1rem;
    height: 100px;
  }
  .cardTitle {
    font-size: $font-size-xl;
    font-weight: bold;
    opacity: 70%;
    @media (max-width: $mobile) {
      font-size: $font-size-lg;
    }
  }
  .cardIcon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    opacity: 70%;

    img {
      transform: scale(0.7);
      @media (max-width: $tablet) {
        width: 50px;
      }
      @media (max-width: $mobile) {
        width: 50px;
      }
    }
  }
}
</style>
