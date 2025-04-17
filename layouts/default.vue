<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800 dark:text-white">
            {{ $t('app.title') }}
          </NuxtLink>
          <div class="flex space-x-4">
            <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {{ $t('navigation.home') }}
            </NuxtLink>
            <NuxtLink to="/quiz" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {{ $t('navigation.quiz') }}
            </NuxtLink>
            <NuxtLink to="/results" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {{ $t('navigation.results') }}
            </NuxtLink>
            <NuxtLink to="/settings" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {{ $t('navigation.settings') }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-white dark:bg-gray-800 shadow-sm mt-auto">
      <div class="container mx-auto px-4 py-4 text-center text-gray-600 dark:text-gray-300">
        <p>{{ $t('app.description') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 