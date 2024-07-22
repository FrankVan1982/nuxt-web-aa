<template>
  <nav class="bg-gray-900 text-white p-4 shadow-md sticky top-0">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo o nome del sito -->
	  <img src="/public/images/logo.png" alt="Logo" width="50">
      
      <!-- Menu di navigazione -->
	  <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
      <ul class="flex space-x-4">
        <li><a href="/index2" class="hover:text-red-500 transition-colors duration-300">Home</a></li>
        <li><a href="/chi-siamo" class="hover:text-red-500 transition-colors duration-300">Chi Siamo</a></li>
        <li><a href="#" class="hover:text-red-500 transition-colors duration-300">Servizi</a></li>
        <li><a href="#" class="hover:text-red-500 transition-colors duration-300">Contatti</a></li>
      </ul>
	  </div>
      
      <!-- Pulsante per il tema scuro (opzionale) -->
      <button @click="toggleDarkMode()" class="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
</button>

    </div>
  </nav>
</template>

<script setup>
import { useDark } from '@vueuse/core';

const { toggleDarkMode } = useDark();

const isDark = useDark();
// Forza la modalità scura
isDark.value = true
</script>