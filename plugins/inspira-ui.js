import { defineNuxtPlugin } from '#app'
import { createInspiraUI } from '@inspira-ui/plugins'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createInspiraUI())
}) 