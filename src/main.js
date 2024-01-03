import { createApp } from 'vue'
import App from './App.vue'
import {createVuetify} from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import {
    VCard,
    VIcon,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions
} from "vuetify/components";

const app = createApp(App)

// create Vuetify
const vuetify = new createVuetify({
    components:{
        VCard,
        VIcon,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VCardActions
    }
})

// use Vuetify
app.use(vuetify)

// Mount app
app.mount('#app')


