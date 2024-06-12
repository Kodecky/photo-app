import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'animate.css/animate.min.css'
import 'normalize.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(store)
app.mount('#app')
