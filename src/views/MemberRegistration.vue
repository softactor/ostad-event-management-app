<template>

<div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Registration</div>
          <div class="card-body">
            <form @submit.prevent="memberRegistration">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="form.name"/>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email"/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="form.password"/>
              </div>
              <div class="mb-3">
                <label for="password_confirmation" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="password_confirmation"  v-model="form.password_confirmation"/>
              </div>
              <div class="mb-3">
                <label for="profile_image" class="form-label">Profile Image</label>
                <input type="file" class="form-control" id="profile_image" @change="profileImageHandle"/>
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue';
import api from '@/api/axios';
import  { useRouter } from 'vue-router';

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  profile_image: ''
});

const router = useRouter(); 

const profileImageHandle = (event) => {
  form.value.profile_image = event.target.files[0];
}

const memberRegistration = async () => {
  try{
    const formData = new FormData()
    for(const key in form.value) {
      formData.append(key, form.value[key])
    }

    const response = api.post('/member-registration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    if(response.status){
      router.push('/login')
    }
    

  }catch(error){
    console.log(error);
  }
}

</script>