import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStoreForSetup = defineStore('sotreForSetup', () => {
  const count = ref<number>(122)
  const changeCount = (): void => {
    count.value += 1
  }
  return {
    count,
    changeCount,
  }
})
