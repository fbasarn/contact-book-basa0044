import {createRouter, createWebHistory} from 'vue-router'
import Contacts from '../views/Contacts.vue'
import ContactDetails from '../views/ContactDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/:id',
        name: 'ContactDetails',
        component: ContactDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router