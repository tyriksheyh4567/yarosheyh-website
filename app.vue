<template>
  <div class="min-h-screen bg-background text-foreground">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Викторина',
  meta: [
    { name: 'description', content: 'Интерактивное приложение для викторин' }
  ]
})
</script>

<style>
@import url('~/assets/css/global.css');
</style>
