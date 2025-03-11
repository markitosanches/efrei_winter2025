import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue'
import AddProductView from '@/views/AddProductView.vue'
import EditProductView from '@/views/EditProductView.vue'
import UserView from '@/views/UserView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: AddProductView
  },
  {
    path: '/edit-product/:id',
    name: 'edit-product',
    component: EditProductView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
