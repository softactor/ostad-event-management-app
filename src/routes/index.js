import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Memberregistration from "@/views/MemberRegistration.vue"; 
import MemberDashboard from "@/views/MemberDashboard.vue";
import MemberEventConfirmation from "@/views/MemberEventConfirmation.vue";
import AdminDashboard from "@/views/AdminDashboard.vue";
import AdminProfile from "@/components/admin/AdminProfile.vue";
import Events from "@/components/admin/Events.vue";
import EventEdit from "@/components/admin/EventEdit.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/registration', component: Memberregistration},
    {path: '/member-dashboard', component: MemberDashboard},
    {path: '/member-event-confirmation', component: MemberEventConfirmation},
    {
        path: '/admin', 
        component: AdminDashboard,
        children: [
            {path: 'dashboard', component: AdminProfile },
            {path: 'events', component: Events},
            {path: 'event/edit/:eventId', component: EventEdit}
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;