import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import CourseDetails from './views/course_details.vue'

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/courses/:slug',
        component:CourseDetails
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router