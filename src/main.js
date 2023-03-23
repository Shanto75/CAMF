import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$apibaseurl = 'http://localhost/shantoorb/wp-json/wp/v2'
app.use(router).mount('#app')
// createApp(App).use(router).mount('#app')

