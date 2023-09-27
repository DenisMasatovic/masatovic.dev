// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store'; // make sure the path is correct

createApp(App).use(router).use(store).mount('#app');
