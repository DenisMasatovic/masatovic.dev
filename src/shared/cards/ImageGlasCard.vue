<template>
  <div class="card">
    <div class="cardTitle">{{ cardTitle }}</div>
    <div class="cardImagesWrapper">
      <div class="cardImages">
        <div v-for="(imagePath, index) in cardImagePaths" :key="index">
          <img :src="imagePath" class="cardImage" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cardTitle", "cardImagePaths"],
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-image: linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 1.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Ffrost.png?alt=media");
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
  @media (min-width: $tablet) {
    &:hover {
      transform: scale(1.05); /* Scale the size of the card by 20% on hover */

      .cardImages {
        opacity: 1 !important;
      }
      .cardTitle,
      .cardIcon {
        transition: 0.3s ease;
        opacity: 1;
      }
    }
  }
  padding: 2rem;
  height: 15vw;
  width: 42vw;
  box-sizing: border-box;
  max-width: 900px;
  @media (max-width: $tablet) {
    height: 225px;
    width: 100%;
  }
  @media (max-width: $mobile) {
    padding: 1rem;
    height: 150px;
  }
  .cardTitle {
    font-size: $font-size-xl;
    font-weight: bold;
    opacity: 70%;
    @media (max-width: $mobile) {
      font-size: $font-size-lg;
    }
  }
  .cardImagesWrapper {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    .cardImages {
      width: 60%;
      @media (max-width: $tablet) {
        width: 70%;
      }
      @media (max-width: $mobile) {
        width: 80%;
      }
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      opacity: 70%;

      img.cardImage {
        height: 80px;
        object-fit: cover;
        @media (min-width: $big-desktop) {
          height: 120px;
        }
        @media (max-width: $tablet) {
          width: auto;
        }
        @media (max-width: $mobile) {
          height: 60px;

          width: auto;
        }
      }
    }
  }
}
</style>
