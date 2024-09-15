import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/demo1',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      children: [
        {
          path: '/demo1',
          name: 'demo1',
          component: () => import('@/views/home/DemoIndex1.vue')
        },
        {
          path: '/demo2',
          name: 'demo2',
          component: () => import('@/views/home/DemoIndex2.vue')
        }
      ]
    }
  ]
})

export default router
