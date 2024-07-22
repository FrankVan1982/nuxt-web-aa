<template>
  <div class="min-h-screen bg-gray-900 text-white p-8 relative">
    <!-- Scattered rectangles -->
    <div v-for="card in cards" :key="card.id" class="mb-4">
      <div
        @click="openHero(card)"
        class="relative inline-block cursor-pointer transform transition-transform hover:scale-105"
      >
        <!-- Glow effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-75 -z-10"></div>
        <!-- Card content -->
        <div class="relative bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg">
          <h2 class="text-lg font-medium font-serif text-white">{{ card.title }}</h2>
        </div>
      </div>
    </div>
    <!-- Hero modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isHeroOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div class="relative bg-gray-800 rounded-lg max-w-2xl w-full mx-auto overflow-hidden">
            <!-- Glow effect for hero -->
            <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-75"></div>
            <!-- Hero content -->
            <div v-if="activeHero" class="relative z-10 p-6">
              <h2 class="text-2xl font-medium mb-4 font-serif text-white">{{ activeHero.title }}</h2>
              <p class="text-gray-300">{{ activeHero.content }}</p>
              <button @click="closeHero" class="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// Force dark mode
isDark.value = true

const cards = ref([
  { id: 1, title: 'Attenzione!', content: 'Il nostro sito è in manutenzione dal 20/07 al 20/08.' }	
])
const activeHero = ref(null)
const isHeroOpen = ref(false)
const openHero = (card) => {
  activeHero.value = card
  isHeroOpen.value = true
}
const closeHero = () => {
  isHeroOpen.value = false
}
</script>

<style>
:root {
  color-scheme: dark;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
