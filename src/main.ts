import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { registerStore } from './store'
import piniaPluginPersist from 'pinia-plugin-persist'
const app = createApp(App)
const store = createPinia()
store.use(piniaPluginPersist)
app.use(store)
// 注册pinia状态管理库
registerStore()

app.mount('#app')
