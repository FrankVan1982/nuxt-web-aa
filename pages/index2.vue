<script setup>
import { ref } from 'vue';
import FeatureCard from '/components/FeatureCard.vue';

const title = ref('Azienda Agricola Nuda Terra')

const features = [
  {
    icon: '🚏',
    title: 'Routing & Layouts',
    description: 'File based routing system to build complex views and interfaces with a powerful and conventional approach.'
  },
  {
    icon: '🔄',
    title: 'Data Fetching',
    description: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.'
  },
  {
    icon: '🎨',
    title: 'Assets & Style',
    description: 'Image, Font and Script optimizations with a built-in support for CSS Modules, Sass, PostCSS, CSS-in-JS and more.'
  },
  {
    icon: '🏆',
    title: 'SEO & Meta Tags',
    description: 'Production ready and indexable by search engines while giving the feeling of an app to the end-users.'
  }
]
</script>

<template>
<Title>Home | {{ title }}</Title>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <!-- Hero Section -->
	<header class="py-20 text-center bg-gray-900">
      <h1 class="text-6xl font-bold mb-4 text-white">Azienda Agricola<br /><span class="text-red-500" style="font-size:75px">Nuda Terra</span></h1>
      <p class="text-2xl mb-8 text-gray-300">
        Vendiamo olio e vino di produzione propria.
      </p>
	  <br />
      <div class="space-x-4">
        <a href="/chi-siamo" class="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">Dimmi di più!</a>
        <a href="/index" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-400 transition-colors duration-300">Ordina da noi</a>
      </div>
    </header>
    <header class="py-20 text-center bg-slate-800 text-white">
      <h1 class="text-6xl font-bold mb-4 text-white">Vendiamo prodotti</h1>
      <h2 class="text-6xl font-bold mb-12 text-red-500 relative">
        genuini e di qualità
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          class="bg-gray-900 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        />
      </div>
    </header>
  </div>
</template>

<style scoped>
@keyframes grow {
  0% {
    width: 0;
  }
  100% {
    width: 8rem; /* 32 in Tailwind */
  }
}

.animate-grow {
  animation: grow 0.5s ease-out forwards;
}
</style>