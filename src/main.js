import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import './assets/scss/tailwind.scss'

const app = createApp(App)
app.use(router)
app.use(store)
.mount('#app')
