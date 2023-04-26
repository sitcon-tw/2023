import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/index.vue";

const routes = [{
    path: "/2023/",
    name: "IndexView",
    component: IndexView,
}, ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;