<template>
  <div class="sceneWrapper">
    <div ref="mount"></div>
    <div class="workspaceButton">
      <MyButton
        buttonClass="secondary"
        buttonText="Workspace betreten"
        @click="$router.push('/workspace')"
      ></MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/shared/MyButton.vue";
import * as THREE from "three";

export default {
  data() {
    return {};
  },
  mounted() {
    this.initThree();
    this.animate();
  },
  beforeUnmount() {
    this.cleanup();
  },
  methods: {
    initThree() {
      // Set up the camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;
      // Set up the scene
      this.scene = new THREE.Scene();
      // Set up the renderer with alpha: true for transparency
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Add alpha: true here
      this.renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
      this.$refs.mount.appendChild(this.renderer.domElement);
      // Create a cube and add it to the scene
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);
    },
    animate() {
      this.animationFrameId = requestAnimationFrame(this.animate); // Store the ID returned by requestAnimationFrame
      // Check if this.cube is not null before accessing its properties
      if (this.cube) {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
      }
      // Render the scene
      this.renderer.render(this.scene, this.camera);
    },
    cleanup() {
      cancelAnimationFrame(this.animationFrameId);
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      this.renderer.dispose();
      this.camera = null;
      this.scene = null;
      this.renderer = null;
      this.cube = null;
    },
  },
  components: { MyButton },
};
</script>

<style scoped>
.sceneWrapper {
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  div {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.workspaceButton {
  margin-bottom: 10rem;
}
</style>
