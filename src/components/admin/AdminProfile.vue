<template>

<ul v-if="loggeduser">
    <li>Name: {{ loggeduser.name }}</li>
    <li>Email: {{ loggeduser.email }}</li>
    <li>Profile Image: 
        <img 
        v-if="loggeduser && loggeduser.profile_image"
        :src="`${apiUrl}${loggeduser.profile_image}`" 
        alt=""/>
    </li>
</ul>

</template>

<script setup>
        import { ref, onMounted } from 'vue';

        const loggeduser = ref(null)
        const apiUrl = 'http://localhost:8095/'
        onMounted(async () => {  
            const user = localStorage.getItem('user')
            loggeduser.value = JSON.parse(user)
        });

    </script>