<template>
  <div class="container py-3">
    <Navbar />

    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from '@/views/Navbar.vue'
import Footer from '@/views/Footer.vue';

</script>

<style scoped>
</style>
