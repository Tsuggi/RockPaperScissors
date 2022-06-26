import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../Views/GameView.vue'
import ResultView from '../Views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView
    },
  ]
})

export default router
