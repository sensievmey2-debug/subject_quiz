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


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
