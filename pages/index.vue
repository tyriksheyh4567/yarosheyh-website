<template>
  <div class="relative min-h-screen">
    <LiquidBackground />
    
    <div class="text-center pt-16 relative z-10">
      <h1 class="text-4xl font-bold mb-6 text-foreground">
        Викторина
      </h1>
      <p class="text-xl mb-8 text-muted-foreground max-w-md mx-auto">
        Проверьте свои знания с нашей интерактивной викториной
      </p>
      <NuxtLink
        to="/quiz"
        class="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Начать викторину
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import LiquidBackground from '~/components/ui/LiquidBackground.vue'
</script> 