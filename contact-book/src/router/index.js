import {createRouter, createWebHistory} from 'vue-router'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact/:id',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router