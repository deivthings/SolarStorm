import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { router } from './router.js'


const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
