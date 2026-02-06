// import { createRouter , createWebHistory} from 'vue-router'
// import Card from '../components/Card.vue'

// const route = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     router : [
//         {
//             path:'/',
//             component: Card,
//         }
//     ]
// })

// export default route

import { createRouter, createWebHistory } from 'vue-router'
import Card from '../components/Card.vue'
import QuizesView from '../view/QuizesView.vue'
import QuizeView from '../view/QuizeView.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'

const routes = [
    {
        path:'/',
        component: QuizesView,
    },
    {
        path: '/quiz/:id',
        component: QuizeView
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  
  const user = JSON.parse(localStorage.getItem('user'));

  if (authRequired && (!user || !user.is_authentication)) {
    next('/login');
  } else {
    next();
  }
});

export default router
