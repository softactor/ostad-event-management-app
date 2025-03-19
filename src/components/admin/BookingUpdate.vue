<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Event update</div>
                    <div class="card-body">

                        <form v-if="booking" @submit.prevent="updateBooking">
                            <div class="mb-3">
                                <label for="title" class="form-label">Status</label>
                                <select v-model="booking.status" class="form-control">
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
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
const booking = ref(null)

const route = useRoute()
const toast = useToast()
const apiUrl = 'http://localhost:8095/'

onMounted(() => {

    const user = localStorage.getItem('user')
    loggeduser.value = JSON.parse(user)

    const bookingId = route.params.bookingId

    if (bookingId) {

        api.get(`/booking/${bookingId}`).then((response) => {
            booking.value = response.data.data
        })

    }


})

const updateBooking = ()=>{
    const bookingId = route.params.bookingId
    api.put(`/booking/update/${bookingId}`, booking.value).then((response)=>{
        toast.success(response.message)
    })

    setTimeout(()=>{
        router.push('/admin/bookings')
    }, 2000)
}

</script>