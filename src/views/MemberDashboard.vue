<template>

    <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">Registration Check test</div>
              <div class="card-body">
                
                    <div class="row">
                        <div class="col-md-4">
                            link
                        </div>
                        <div class="col-md-8">

                                <ul>
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

        const loggeduser = ref(null)
        const apiUrl = 'http://localhost:8095/storage/'
        onMounted(async () => {  
            const user = localStorage.getItem('user')
            loggeduser.value = JSON.parse(user)
            console.log(loggeduser.value)
        });

    </script>