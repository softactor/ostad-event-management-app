import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification'
import router from './routes/index.js'


import ('bootstrap/dist/css/bootstrap.min.css')
import ('bootstrap/dist/js/bootstrap.min.js')
import 'vue-toast-notification/dist/theme-bootstrap.css';

import Echo from 'laravel-echo'
import Pusher from 'pusher-js'


// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '78c747ca39c06d2788b5',
//     cluster: "ap2",
//     forceTLS: true,
// });

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '78c747ca39c06d2788b5',
    cluster: "ap2",
    forceTLS: true,
})


const app = createApp(App)
app.use(router)
app.use(ToastPlugin)
app.mount('#app')

