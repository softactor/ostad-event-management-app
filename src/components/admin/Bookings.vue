<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">member Bookings</div>
                    <div class="card-body">

                        <table class="table" v-if="bookings">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Event Title</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">Ticket Price</th>
                                    <th scope="col">Ticket QTY</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(booking, index) in bookings" :key="booking.id">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ booking.event.title }}</td>
                                    <td>{{ booking.event.start_time }}</td>
                                    <td>{{ booking.event.end_time }}</td>
                                    <td>{{ booking.user.name }}</td>
                                    <td>{{ booking.event.ticket_price }}</td>
                                    <td>{{ booking.ticket_qty }}</td>
                                    <td>{{ booking.total_price }}</td>
                                    <td>{{ booking.status }}</td>

                                    <td>
                                        <router-link :to="`/admin/booking/update/${booking.id}`">
                                            Edit
                                        </router-link>
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import api from '@/api/axios';
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';

const bookings = ref([])
const loggeduser = ref([])
const toast = useToast()

const router = useRouter()

onMounted(async () => {

    const user = localStorage.getItem('user')
    loggeduser.value = JSON.parse(user)

    try {
        const response = await api.get('bookings');
        if (response.status) {
            bookings.value = response.data.data;
        }

    } catch (error) {
        console.log(error);
    }
});

</script>