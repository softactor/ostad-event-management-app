import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Memberregistration from "@/views/MemberRegistration.vue"; 
import MemberDashboard from "@/views/MemberDashboard.vue";
import MemberEventConfirmation from "@/views/MemberEventConfirmation.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/registration', component: Memberregistration},
    {path: '/member-dashboard', component: MemberDashboard},
    {path: '/member-event-confirmation', component: MemberEventConfirmation},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;