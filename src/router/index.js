import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  
  {
    path: '/log',
    name: 'login',
   
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/colec',
    name: 'coleçoes',
   
    component: () => import( '../views/ColecoesView.vue')
  },
  {
    path: '/loja',
    name: 'store',
   
    component: () => import( '../views/StoreView.vue')
  },
  {
    path: '/contat',
    name: 'contato',
   
    component: () => import( '../views/ContatoView.vue')
  },
  {
    path: '/hist',
    name: 'hitoria',
   
    component: () => import( '../views/HistoriaView.vue')
  },
  {
  path: '/cadast',
  name: 'cadastro',
  
  component: () => import( '../components/Cadastro.vue')
}
  
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
