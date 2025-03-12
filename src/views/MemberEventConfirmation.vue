<template>
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Registration Check test</div>
          <div class="card-body">
            
            <div class="row">
                <div class="col-md-6">
                    user information

                    <ul v-if="loggeduser">
                        <li>Name: {{ loggeduser.name }}</li>
                        <li>Email: {{ loggeduser.email }}</li>
                        <li>Profile Image: 
                            <img 
                            v-if="loggeduser && loggeduser.profile_image"
                            :src="`${apiUrl}${loggeduser.profile_image}`" 
                            alt=""
                            class="img-fluid"/>
                        </li>
                    </ul>

                </div>
                <div class="col-md-6">
                    <ul v-if="event">
                        <li>Name: {{ event.title }}</li>
                        <li>Start: {{ event.start_time }}</li>
                        <li>End: {{ event.end_time }}</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    confirmation details form
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router';
import api from '@/api/axios';
import { useToast } from 'vue-toast-notification';
import { onMounted, ref } from 'vue';


const loggeduser = ref(null)
const event = ref(null)

const route = useRoute()
const apiUrl = 'http://localhost:8095/'

onMounted(()=>{

    const user = localStorage.getItem('user')
    loggeduser.value = JSON.parse(user)

    const eventId = route.query.eventId

    if(eventId){

        api.get(`/event/${eventId}`).then((response)=>{
            event.value = response.data.data

            console.log(event.value)

        })

    }


})



</script>