/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {createVuetify} from "vuetify";
import router from "./router";
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App)
const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
    },
    components,
    directives,
});
app.use(vuetify)
// app.use(pinia)
app.use(router)

app.mount('#app')
