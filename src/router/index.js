import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/about.vue'
import header from '/src/views/header.vue'
import demo from '/src/views/demo.vue'
import documentation from '/src/views/documentation.vue'
import mycodepen from '/src/views/mycodepen.vue'
import samples from '/src/views/samplepage.vue'
import promo from '/src/views/promo.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
     },
     {
        path: '/about',
        name: 'about',
        component: about,
     },
   {
      path: '/header',
      name: 'header',
      component: header,
   },
   {
      path: '/demo',
      name: 'demo',
      component: demo,
   },
   {
      path: '/documentation',
      name: 'documentation',
      component: documentation,
   },
   {
      path: '/samples',
      name: 'samples',
      component: samples,
   },
   {
      path: '/mycodepen',
      name: 'mycodepen',
      component: mycodepen,
   },
   {
      path: '/promo',
      name: 'promo',
      component: promo,
   },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router