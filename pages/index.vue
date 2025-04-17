<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
      {{ $t('app.title') }}
    </h1>
    <p class="text-xl mb-8 text-gray-600 dark:text-gray-300">
      {{ $t('app.description') }}
    </p>
    <NuxtLink
      to="/quiz"
      class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
    >
      {{ $t('quiz.start') }}
    </NuxtLink>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 