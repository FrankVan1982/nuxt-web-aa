<template>
  <div class="bg-gray-900 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
    <div class="text-3xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-bold mb-2 text-white">{{ title }}</h3>
    <p class="text-white">{{ description }}</p>
    <div class="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>