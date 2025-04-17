<template>
  <div
    class="absolute inset-0 z-[-1] bg-background overflow-hidden"
    :class="[className]"
  >
    <div
      class="h-full w-full translate-z-0 [container-type:size]"
      aria-hidden="true"
    >
      <div
        class="absolute inset-0 h-full w-full [mask-size:40px] [mask-repeat:space] animate-slow-pulse"
        :style="{
          backgroundColor: 'hsl(var(--primary) / 0.13)',
          maskImage: `radial-gradient(black, transparent ${gradientSize}%)`,
        }"
      ></div>
      <div
        class="absolute inset-x-0 min-h-screen transform-gpu -translate-y-1/2 blur-3xl opacity-30"
        aria-hidden="true"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-30 w-full h-full rotate-180"
          :style="{
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 min-h-screen transform-gpu translate-y-1/2 blur-3xl opacity-30"
        aria-hidden="true"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-red-500 to-primary opacity-30 w-full h-full"
          :style="{
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  className: {
    type: String,
    default: ''
  },
  gradientSize: {
    type: Number,
    default: 70
  }
})
</script>

<style scoped>
@keyframes slow-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-slow-pulse {
  animation: slow-pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 