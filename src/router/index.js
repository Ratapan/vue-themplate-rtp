import { createRouter, createWebHistory } from 'vue-router'
import Init from './routes/init_router'

const routes = [
  ...Init.InitList
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
