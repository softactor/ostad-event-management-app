<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Event update</div>
                    <div class="card-body">

                        <form v-if="event" @submit.prevent="updateEvent">
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input v-model="event.title" type="text" class="form-control" id="title">
                            </div>
                            <div class="mb-3">
                                <label for="start_time" class="form-label">Start Time</label>
                                <input v-model="event.start_time" type="text" class="form-control" id="start_time">
                            </div>
                            <div class="mb-3">
                                <label for="end_time" class="form-label">End Time</label>
                                <input v-model="event.end_time" type="text" class="form-control" id="end_time">
                            </div>
                            <div class="mb-3">
                                <label for="ticket_price" class="form-label">Ticket Price</label>
                                <input v-model="event.ticket_price" type="text" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

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
import router from '@/routes';


const loggeduser = ref(null)
const event = ref(null)

const route = useRoute()
const toast = useToast()
const apiUrl = 'http://localhost:8095/'

onMounted(() => {

    const user = localStorage.getItem('user')
    loggeduser.value = JSON.parse(user)

    const eventId = route.params.eventId

    if (eventId) {

        api.get(`/event/${eventId}`).then((response) => {
            event.value = response.data.data

            console.log(event.value)

        })

    }


})

const updateEvent = ()=>{
    const eventId = route.params.eventId
    api.put(`/event/update/${eventId}`, event.value).then((response)=>{
        toast.success(response.message)
    })

    setTimeout(()=>{
        router.push('/admin/events')
    }, 2000)
}

</script>