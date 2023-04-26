import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import { createHead } from "@vueuse/head"
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
})
const head = createHead()
const app = createApp(App);
app.use(head)
app.use(vuetify);
app.use(router)
app.use(loadFonts);
app.use(AOS.init());
app.mount('#app');