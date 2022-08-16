import { defineStore } from 'pinia'

export const useCounterStoreForOption = defineStore('storeForOption', {
  state: () => {
    return { count: 1 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
  getters: {
    getCount(state) {
      return state.count
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        paths: ['count'],
      },
    ],
  },
})
