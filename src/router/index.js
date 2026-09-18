import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/components/DashBoard.vue';
import Inspections from '@/components/Inspections.vue';
import Login from '../components/Login.vue';
import Knowledge from '@/components/Knowledge.vue';
import Settings from '@/components/Settings.vue';

const routes = [
    //alle routes komen hier
    {
        path: '/',
        name: 'home',
        component: DashBoard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/inspections/:state',
        name: 'inspections',
        component: Inspections
    },
    {
        path: '/knowledge',
        name: 'knowledge',
        component: Knowledge
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;