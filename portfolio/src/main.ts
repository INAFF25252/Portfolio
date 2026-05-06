import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from '../src/App.vue'
import Main from '../src/Main.vue'
import CAD from '../src/CAD.vue'
import Community from '../src/Community.vue'
import Unity from '../src/Unity.vue'

const routes = [
  { path: '/', component: Main},
 { path: '/cad', component: CAD },
 { path: '/unity', component: Unity },
  { path: '/community', component: Community },
];
const router = createRouter({
 history: createWebHistory(),
 routes,
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');