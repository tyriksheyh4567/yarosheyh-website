<template>
  <div class="max-w-2xl mx-auto">
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Вопрос {{ currentQuestion + 1 }} из {{ questions.length }}
      </h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          {{ currentQuestionText }}
        </p>
        <div class="space-y-4">
          <button
            v-for="(option, index) in currentOptions"
            :key="index"
            @click="selectAnswer(index)"
            :class="[
              'w-full text-left p-4 rounded-lg transition-colors duration-200',
              selectedAnswer === index
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
            ]"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <button
        v-if="currentQuestion > 0"
        @click="previousQuestion"
        class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Предыдущий вопрос
      </button>
      <button
        v-if="currentQuestion < questions.length - 1"
        @click="nextQuestion"
        :disabled="selectedAnswer === null"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Следующий вопрос
      </button>
      <button
        v-else
        @click="finishQuiz"
        :disabled="selectedAnswer === null"
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Завершить
      </button>
    </div>
  </div>
</template>

<script setup>
const questions = ref([
  {
    question: 'Какой язык программирования используется в Nuxt?',
    options: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    correctAnswer: 1
  },
  {
    question: 'Что такое Vue.js?',
    options: ['Фреймворк', 'Библиотека', 'Язык программирования', 'Операционная система'],
    correctAnswer: 0
  },
  {
    question: 'Какой модуль используется для интернационализации в Nuxt?',
    options: ['@nuxtjs/i18n', '@nuxtjs/auth', '@nuxtjs/axios', '@nuxtjs/pwa'],
    correctAnswer: 0
  }
])

const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const score = ref(0)

const currentQuestionText = computed(() => questions.value[currentQuestion.value].question)
const currentOptions = computed(() => questions.value[currentQuestion.value].options)

const selectAnswer = (index) => {
  selectedAnswer.value = index
}

const nextQuestion = () => {
  if (selectedAnswer.value === questions.value[currentQuestion.value].correctAnswer) {
    score.value++
  }
  currentQuestion.value++
  selectedAnswer.value = null
}

const previousQuestion = () => {
  currentQuestion.value--
  selectedAnswer.value = null
}

const finishQuiz = () => {
  if (selectedAnswer.value === questions.value[currentQuestion.value].correctAnswer) {
    score.value++
  }
  navigateTo('/results')
}
</script> 