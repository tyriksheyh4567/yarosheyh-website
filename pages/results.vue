<template>
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
      Результаты
    </h2>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
      <p class="text-2xl mb-4 text-gray-700 dark:text-gray-300">
        Ваш счет: {{ score }} из {{ totalQuestions }}
      </p>
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
        <div
          class="bg-blue-600 h-4 rounded-full transition-all duration-500"
          :style="{ width: `${(score / totalQuestions) * 100}%` }"
        ></div>
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-400">
        {{ getPerformanceMessage }}
      </p>
    </div>
    <NuxtLink
      to="/quiz"
      class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
    >
      Начать викторину
    </NuxtLink>
  </div>
</template>

<script setup>
const score = ref(0)
const totalQuestions = ref(3)

const getPerformanceMessage = computed(() => {
  const percentage = (score.value / totalQuestions.value) * 100
  if (percentage >= 80) {
    return 'Отличный результат!'
  } else if (percentage >= 60) {
    return 'Хороший результат!'
  } else if (percentage >= 40) {
    return 'Неплохо, но можно лучше!'
  } else {
    return 'Попробуйте еще раз!'
  }
})

// In a real app, you would get the score from a store or route params
onMounted(() => {
  // This is just for demonstration
  score.value = Math.floor(Math.random() * totalQuestions.value) + 1
})
</script> 