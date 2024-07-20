<template>
  <div class="min-h-screen bg-white p-8 relative">
    <!-- Scattered rectangles -->
    <div v-for="card in cards" :key="card.id" class="mb-4">
      <div
        @click="openHero(card)"
        class="relative inline-block cursor-pointer transform transition-transform hover:scale-105"
      >
        <!-- Glow effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-red-950 rounded-lg blur opacity-75 -z-10"></div>
        <!-- Card content -->
        <div class="relative bg-white p-4 rounded-lg border border-gray-200 shadow-lg">
          <h3 class="text-lg font-semibold">{{ card.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Hero modal -->
    <UModal v-model="isHeroOpen">
      <div class="relative p-6 bg-white rounded-lg max-w-2xl mx-auto">
        <!-- Glow effect for hero -->
        <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-red-950 rounded-lg blur opacity-75 -z-10"></div>
        <!-- Hero content -->
        <div v-if="activeHero" class="relative z-10">
          <h2 class="text-2xl font-bold mb-4">{{ activeHero.title }}</h2>
          <p class="text-gray-600">{{ activeHero.content }}</p>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  { id: 1, title: 'Attenzione!', content: 'Il nostro sito è in manutenzione dal 20/07 al 20/08.' }	
])

const activeHero = ref(null)
const isHeroOpen = ref(false)

const openHero = (card) => {
  activeHero.value = card
  isHeroOpen.value = true
}
</script>