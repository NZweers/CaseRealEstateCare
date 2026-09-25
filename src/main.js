import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives
})


createApp(App)
    .use(pinia)
    .use(vuetify)
    .use(router)
    .mount('#app')
