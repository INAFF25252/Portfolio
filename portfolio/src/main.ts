import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
import Home from './Home.vue'
import Projects from './Projects.vue'
import CAD from './CAD.vue'
import PetPastel from './PetPastel.vue'
import Unity from './Unity.vue'
import Art from './Art.vue'
import CuddleBox from './CuddleBox.vue'
import Music from './Music.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Logo from './Logo.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', alias: '/Projects', component: Projects },
  { path: '/about', alias: '/About', component: About },
  { path: '/cad', alias: '/CAD', component: CAD },
  { path: '/unity', alias: '/Unity', component: Unity },
  { path: '/pet-pastel', alias: '/PetPastel', component: PetPastel },
  { path: '/art', component: Art },
  { path: '/art/portfolio', component: Portfolio },
  { path: '/art/logo', component: Logo },
  { path: '/cuddle-box', alias: '/CuddleBox', component: CuddleBox },
  { path: '/music', alias: '/Music', component: Music },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
