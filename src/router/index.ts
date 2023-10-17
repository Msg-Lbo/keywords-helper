import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/keywords-helper',
            name: 'keywords-helper',
            component: () => import('@/views/index.vue')
        }
    ]
});

export default router