<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <main class="p-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>