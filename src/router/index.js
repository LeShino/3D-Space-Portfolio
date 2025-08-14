import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'Home', component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about', name: 'AboutView',  component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/test-flipword', name: 'FlipwordTestView',  component: () => import('@/views/Test/FlipwordTestView.vue'),
    },
    {
      path: '/test-globe', name: 'GlobeTestView',  component: () => import('@/views/Test/GlobeTestView.vue'),
    },
    {
      path: '/test-orbit', name: 'OrbitTestView',  component: () => import('@/views/Test/OrbitTestView.vue'),
    },
    {
      path: '/test-icon', name: 'IconCloudTestView',  component: () => import('@/views/Test/IconCloudTestView.vue'),
    },
    {
      path: '/test-3d', name: '3DTestComp',  component: () => import('@/components/sections/home/hero/SettSpiritBlossom3D.vue'),
    },
  ],
})

export default router
