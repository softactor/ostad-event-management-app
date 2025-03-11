import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification'
import router from './routes/index.js'


import ('bootstrap/dist/css/bootstrap.min.css')
import ('bootstrap/dist/js/bootstrap.min.js')
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)
app.use(router)
app.use(ToastPlugin)
app.mount('#app')

