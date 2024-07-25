<template>
  <div class="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-50">
    <nav class="bg-red-500 rounded-full shadow-lg backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-xl font-bold text-white">
              <img src="/public/images/logo.png" alt="Logo" class="h-8 w-auto" />
            </NuxtLink>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink 
                v-for="item in navigationItems" 
                :key="item.name" 
                :to="item.href" 
                class="text-white hover:bg-white transition-colors hover:text-black px-3 py-2 rounded-full text-md font-medium"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <UButton 
              icon="i-heroicons-bars-3" 
              color="white" 
              variant="ghost" 
              @click="isOpen = !isOpen"
            />
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state -->
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 mt-2 bg-red-500 rounded-3xl overflow-hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.name" 
            :to="item.href" 
            class="text-white hover:bg-white transition-colors block hover:text-black px-3 py-2 rounded-full text-md font-medium"
            @click="isOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navigationItems = [
  { name: 'Home', href: '/index2' },
  { name: 'Chi siamo', href: '/chi-siamo' },
  { name: 'Contact', href: '/contact' },
]
</script>