import { createRouter, createWebHistory } from 'vue-router'

import FirstPage from './components/FirstPage/FirstPage.vue'
import SecondPage from './components/SecondPage/SecondPage.vue'
import ThirdPage from './components/ThirdPage/ThirdPage.vue'

const routes = [
  {
    path: '/',
    name: 'first',
    component: FirstPage,
  },
  {
    path: '/second',
    name: 'second',
    component: SecondPage,
  },
  {
    path: '/third',
    name: 'third',
    component: ThirdPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router