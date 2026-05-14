import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from '../src/App.vue'
import Main from '../src/Main.vue'
import CAD from '../src/CAD.vue'
import PetPastel from '../src/PetPastel.vue'
import Unity from '../src/Unity.vue'
import Art from '../src/Art.vue'
import CuddleBox from '../src/CuddleBox.vue'
import Music from '../src/Music.vue'

const routes = [
  { path: '/', component: Main},
 { path: '/cad', component: CAD },
 { path: '/unity', component: Unity },
  { path: '/PetPastel', component: PetPastel },
   { path: '/art', component: Art},
    { path: '/CuddleBox', component: CuddleBox},
     { path: '/Music', component: Music},
];
const router = createRouter({
 history: createWebHistory(),
 routes,
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');