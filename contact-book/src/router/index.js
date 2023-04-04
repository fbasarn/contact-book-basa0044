import {createRouter, createWebHistory} from 'vue-router'
import Contacts from '../views/Contacts.vue'
import ContactDetails from '../views/ContactDetails.vue'
import New from '../views/New.vue'
import Edit from '../views/Edit.vue'



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
    },
    {
        path: '/New',
        name: 'New',
        component: New
    },
    {
        path: '/:id/Edit',
        name: 'Edit',
        component: Edit,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router