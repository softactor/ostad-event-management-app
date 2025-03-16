<template>
<h1>Login</h1>
<form @submit.prevent="memberLogin">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
    <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
    <div v-if="errors.password" class="text-danger">{{ errors.password[0] }}</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</template>

<script setup>

import { ref } from 'vue';
import api from '@/api/axios';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';


const email = ref('');
const password = ref(''); 
const toast = useToast();
const errors = ref({});
const router = useRouter();

const memberLogin = async () => {
  try{
    const response = await api.post('/login', {
      email: email.value,
      password: password.value
    });
    if(response.status){

      const userData = response.data.data
      localStorage.setItem('apiToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(userData));
      
      toast.success('Login was successfull', {
        position:'top-right',
        duration:2000
      })
      setTimeout(()=>{

        if(userData.role == 'user'){
          router.push('/member-dashboard').then(() => {
            return window.location.reload();
          })
        }else if(userData.role == 'admin'){
          router.push('/admin/dashboard').then(() => {
            return window.location.reload();
          })
        }

        
      }, 2000)
      
    }
  }catch(error){
    toast.error('validation error', {
      position: 'top-right'
    })
    errors.value = error.response.data.errors
  }
}


</script>