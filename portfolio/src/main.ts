import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from '../src/App.vue'
import CAD from '../src/CAD.vue'
import Unity from '../src/Unity.vue'

const routes = [
 { path: '/cad', component: CAD },
 { path: '/unity', component: Unity },
];
const router = createRouter({
 history: createWebHistory(),
 routes,
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');