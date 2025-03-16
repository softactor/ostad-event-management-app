<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Events</div>
                    <div class="card-body">

                        <table class="table" v-if="events">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Ticket Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(event, index) in events" :key="event.id">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ event.title }}</td>
                                    <td>{{ event.start_time }}</td>
                                    <td>{{ event.end_time }}</td>
                                    <td>{{ event.ticket_price }}</td>
                                    <td>

                                        <router-link :to="`/admin/event/edit/${event.id}`">
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

const events = ref([])
const toast = useToast()

const router = useRouter()

onMounted(async () => {
    try {
        const response = await api.get('/events');
        if (response.status) {
            events.value = response.data.data;
        }

    } catch (error) {
        console.log(error);
    }
});

</script>