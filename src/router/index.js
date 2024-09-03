import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  
  {
    path: '/log',
    name: 'login',
   
    component: () => import( '../components/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/colec',
    name: 'coleçoes',
   
    component: () => import( '../components/Colecoes.vue')
  },
  {
    path: '/loja',
    name: 'store',
   
    component: () => import( '../components/Store.vue')
  },
  {
    path: '/contat',
    name: 'contato',
   
    component: () => import( '../components/Contato.vue')
  },
  {
    path: '/hist',
    name: 'hitoria',
   
    component: () => import( '../components/Historia.vue')
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
