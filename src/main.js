import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "./styles/index.css"
import "./assets/font.css"

const app = createApp(App);

app.use(router);
app.mount('#app')
