import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App)
//   })
