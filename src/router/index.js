import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/about.vue'
import schedule from '/src/views/schedule.vue'
import contact from '/src/views/contact.vue'
import container from '/src/views/container.vue'
import header from '/src/views/header.vue'
import demo from '/src/views/demo.vue'
import documentation from '/src/views/documentation.vue'
// import briancronk from '/src/assets/BrianCronk.jpg'
// import briancox from '/src/assets/Briancox.png'
// import judyharris from '/src/assets/judyharris.jpg'
// import cassidy from '/src/assets/cassidy.jpg'
// import Hbrown from '/src/assets/Hbrown.jpg'
// import liam from '/src/assets/liam.png'
// import jsalinas from '/src/assets/jsalinas.jpeg'
// import sanchan from '/src/assets/sanchan.jpeg'

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
        path: '/schedule',
        name: 'schedule',
        component: schedule,
     },
     {
        path: '/contact',
        name: 'contact',
        component: contact,
     },
     {
      path: '/container',
      name: 'container',
      component: container,
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
   // {
   //    path: '/images/briancronk',
   //    name: 'briancronk',
   //    component: briancronk,
   // },
   // {
   //    path: '/images/braincox',
   //    name: 'briancox',
   //    component: briancox,
   // },
   // {
   //    path: '/images/cassidy.jpg',
   //    name: 'cassidy.jpg',
   //    component: cassidy,
   // },
   // {
   //    path: '/images/Hbrown.jpg',
   //    name: 'Hbrown.jpg',
   //    component: Hbrown,
   // },
   // {
   //    path: '/images/judyharris.jpg',
   //    name: 'judyharris.jpg',
   //    component: judyharris,
   // },
   // {
   //    path: '/images/liam.jpg',
   //    name: 'liam.jpg',
   //    component: liam,
   // },
   // {
   //    path: '/images/jsalinas.jpeg',
   //    name: 'jsalinas.jpeg',
   //    component: jsalinas,
   // },
   // {
   //    path: '/images/sanchan.jpeg',
   //    name: 'sanchan.jpeg',
   //    component: sanchan,
   // },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router