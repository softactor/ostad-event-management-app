<template>
<h1>Login</h1>
<form @submit.prevent="memberLogin">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
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


const email = ref('');
const password = ref(''); 

const memberLogin = async () => {
  try{
    const response = await api.post('/login', {
      email: email.value,
      password: password.value
    });
    if(response.status){
      localStorage.setItem('apiToken', response.data.token);
      localStorage.setItem('user', response.data.data);
      window.location.href = '/';
    }
  }catch(error){
    console.log(error);
  }
}


</script>