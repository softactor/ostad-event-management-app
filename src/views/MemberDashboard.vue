<template>

    <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">Member Dashboard Updated</div>
              <div class="card-body">
                
                    <div class="row">
                        <div class="col-md-4">
                             <router-link to="/member-event-bookings">
                                Bookings
                             </router-link>
                        </div>
                        <div class="col-md-8">
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

                        </div>
                    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </template>
    
    <script setup>
        import { ref, onMounted } from 'vue';
        import { useToast } from 'vue-toast-notification';

        const loggeduser = ref(null)
        const toast = useToast()

        const apiUrl = 'http://localhost:8095/'
        onMounted(async () => {  
            const user = localStorage.getItem('user')
            loggeduser.value = JSON.parse(user)

            // const channel = window.Echo.channel('booking-channel') 

            const channel = window.Echo.private(`booking-channel.${loggeduser.value.id}`);

            channel.listen('.booking-updated', (data) => {
              const message = data.bookingData.user.name + ' event '+  data.bookingData.event.title + ' booking '+  data.bookingData.status
              toast.success(message, {
                position:'top-right',
                duration:2000
              })
            })


        });

    </script>