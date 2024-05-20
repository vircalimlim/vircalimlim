import './assets/tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
const app = createApp(App)

app.use(router)

app.mount('#app')
