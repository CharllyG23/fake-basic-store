import { createApp } from 'vue'
import App from './App.vue'
// import stores from './stores'
import router from './routes'
import './assets/scss/tailwind.scss'

const app = createApp(App)
app.use(router)
// app.use(stores)
.mount('#app')
