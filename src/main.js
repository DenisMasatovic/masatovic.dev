import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store"; // make sure the path is correct
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
createApp(App).use(VueViewer).use(router).use(store).mount("#app");
