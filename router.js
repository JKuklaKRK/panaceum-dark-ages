
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './src/components/Homepage.vue'
import Form from './src/components/Form.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/panaceum-dark-ages/', component: Homepage },
      { path: '/panaceum-dark-ages/form', component: Form }
    ]
  })


export default router