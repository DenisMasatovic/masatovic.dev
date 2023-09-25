<template>
    <div class="spinner" :style="{ 'border-top-color': color }"></div>
  </template>
  
  <script>
  export default {
    props: ["color"],
  };
  </script>
  
  <style scoped lang="scss">
  @import "../assets/sass/style.scss";
  
  .spinner {
    border: 4px solid transparent; 
    border-top: 4px solid white; 
    border-radius: 50%;
    width: 0.7rem;
    height: 0.7rem;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  