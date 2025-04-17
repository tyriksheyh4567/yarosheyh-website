<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
      Настройки
    </h2>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Тема
          </h3>
          <div class="flex space-x-4">
            <button
              @click="setTheme('light')"
              class="flex-1 p-4 rounded-lg border-2 transition-colors duration-200"
              :class="[
                colorMode.preference === 'light'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              ]"
            >
              Светлая
            </button>
            <button
              @click="setTheme('dark')"
              class="flex-1 p-4 rounded-lg border-2 transition-colors duration-200"
              :class="[
                colorMode.preference === 'dark'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              ]"
            >
              Темная
            </button>
            <button
              @click="setTheme('system')"
              class="flex-1 p-4 rounded-lg border-2 transition-colors duration-200"
              :class="[
                colorMode.preference === 'system'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              ]"
            >
              Системная
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const setTheme = (theme) => {
  colorMode.preference = theme
}
</script> 