import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/relatorio'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/relatorio'
      },
      {
        path: 'relatorio',
        component: () => import('@/views/relatorio.vue')
      },
      {
        path: 'ganhos',
        component: () => import('@/views/ganhos.vue')
      },
      {
        path: 'despesas',
        component: () => import('@/views/despesas.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
