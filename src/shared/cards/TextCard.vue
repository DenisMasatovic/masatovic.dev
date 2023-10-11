<template>
  <div class="card">
    <div class="cardTitle">{{ cardTitle }}</div>
    <div class="cardTextWrapper">
      <div class="cardText">
        {{ cardText }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cardTitle", "cardText"],
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-image: linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 1.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Ffrost.png?alt=media");
  background-repeat: repeat; 
  border: 1px solid rgba(183, 183, 183, 0.4);
  border-radius: 25px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 10;
  position: relative;
  transition: transform 0.3s ease; 
  cursor: pointer;
  @media (min-width: $tablet) {
    &:hover {
      transform: scale(1.05); 

      .cardTitle{
        transition: 0.3s ease;
          opacity: 1;
      }
      .cardTextWrapper {
        .cardText {
          transition: 0.3s ease;
          opacity: 1;
        }
      }
    }
  }
  padding: 2rem;
  width: 45vw;
  max-width: 900px;
  min-height: 10vw;
  box-sizing: border-box;
  @media (max-width: $tablet) {
    width: 100%;
  }
  @media (max-width: $mobile) {
    padding: 1rem;
  }
  .cardTitle {
    font-size: $font-size-xl;
    font-weight: bold;
    opacity: 70%;
    @media (max-width: $mobile) {
      font-size: $font-size-lg;
    }
  }
  .cardTextWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .cardText {
      text-align: start;
      opacity: 70%;
      font-size: $font-size-lg;
      @media (max-width: $mobile) {
      font-size: $font-size-md;
    }
    }
  }
}
</style>
