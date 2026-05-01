import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import CAD from './CAD.vue';

const routes = [
 { path: '/', component: CAD },
 { path: '/food', component:  },
];
const router = createRouter({
 history: createWebHistory(),
 routes,
});
const app = createApp(App);
app.use(router);
app.mount('#app');