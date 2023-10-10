<template>
  <div class="card">
    <div class="profileImage">
      <img :src="profileImageUrl" />
    </div>
    <div class="information">
      <div class="paragraphBold">Denis Masatovic, {{ age }}</div>
      <div class="paragraphDefault">Full-Stack Entwickler</div>
      <a class="paragraphEmail" :href="'mailto:' + email">{{ email }}</a>
      <div class="paragraphDefault">+49 0162 123 4567</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      birthday: new Date(2001, 5, 8), // Note: Month is zero-based, so June is 5.
      email: "kontakt@masatovic.dev",
    };
  },
  computed: {
    age() {
      const today = new Date();
      let age = today.getFullYear() - this.birthday.getFullYear();
      const m = today.getMonth() - this.birthday.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < this.birthday.getDate())) {
        age--;
      }
      return age;
    },
    profileImageUrl() {
      return "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2FprofileImage.png?alt=media";
    },
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
.card {
  animation: scaleAnimation 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 700px;
  @media (max-width: $mobile) {
    gap: 2rem;
  }
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
  @media (min-width: $tablet) {
    &:hover {
      transform: scale(1.05); /* Scale the size of the card by 20% on hover */
    }
  }
  padding: 2rem;
  height: calc(70vh + 2rem);
  width: 100%;
  @media (max-width: $tablet) {
    height: calc(50vh + 2rem);

    width: 100%;
  }
  @media (max-width: $mobile) {
    padding: 1rem;
    height: calc(55vh + 2rem);
  }
  .profileImage {
    margin-top: 2rem;
    img {
      @media (max-width: $tablet) {
        height: 25vw;
      }
      @media (max-width: $mobile) {
        height: 45vw;
      }
    }
  }
  .information {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .paragraphBold {
      font-size: $font-size-xl;
      font-weight: bold;
      text-align: start;
    }
    .paragraphDefault {
      font-size: $font-size-lg;
      text-align: start;
    }
    .paragraphEmail {
      margin-top: 3rem;
      @media (max-width: $mobile) {
        margin-top: 1rem;
      }
      font-size: $font-size-lg;
      text-align: start;
      color: white;
    }
  }
}
</style>
