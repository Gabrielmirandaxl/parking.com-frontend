import { createRouter, createWebHistory } from 'vue-router';

import HomeVue from '../Pages/home/Home.vue';
import AdminVue from '../Pages/admin/Admin.vue';
import RemoveCarVue from '../Pages/deleteCar/DeleteCar.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeVue,
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminVue,
        },
        {
            path: '/removeCar',
            name: 'deleteCar',
            component: RemoveCarVue,
        },
    ],
});

export default router;
