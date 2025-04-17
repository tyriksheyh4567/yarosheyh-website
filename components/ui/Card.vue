<template>
  <div :class="['rounded-lg border bg-card text-card-foreground shadow-sm', className]">
    <slot />
  </div>
</template>

<script setup>
import { cn } from '~/lib/utils'

const props = defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<script>
export default {
  inheritAttrs: false
}
</script> 