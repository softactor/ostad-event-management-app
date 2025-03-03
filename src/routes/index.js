import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Memberregistration from "@/views/MemberRegistration.vue"; 


const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/registration', component: Memberregistration},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;