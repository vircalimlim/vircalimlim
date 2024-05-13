import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Virgilio Calimlim'
      }
    },
  ]
})

router.beforeEach((to, from) => {
  document.title = (to.meta.title as string) ?? 'Virgilio Calimlim';
});

export default router
