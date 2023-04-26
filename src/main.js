import App from './App.vue'
// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import { loadFonts } from './plugins/webfontloader';
// import '@mdi/font/css/materialdesignicons.css';
// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify';
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';

// const vuetify = createVuetify({
//     components,
//     directives,
// })

import { ViteSSG } from 'vite-ssg'
import IndexView from '@/pages/index.vue'
// import 'vue3-openlayers/dist/vue3-openlayers.css'
export const createApp = ViteSSG(
    App, {
        base: '/2023/',
        routes: [{
            path: '/',
            component: IndexView,
            // children: [
            //     ...Object.entries(
            //         import.meta.glob('./pages/*.vue')).map(
            //         ([p, component]) => {
            //             const PAGE_DIR = '../pages'
            //             const PAGE_EXT = '.vue'
            //             const PAGE_INDEX = 'index'

            //             let path = p.substring(PAGE_DIR.length, p.length - PAGE_EXT.length)
            //             if (path.endsWith(PAGE_INDEX)) {
            //                 path = path.substring(0, path.length - PAGE_INDEX.length - 1)
            //             }
            //             if (!path) {
            //                 path = '/'
            //             }
            //             if (!path.startsWith('/')) {
            //                 path = '/' + path
            //             }
            //             return {
            //                 path,
            //                 component,
            //             }
            //         },
            //     ),
            // ]
        }, ],
    },
    async({ app, router, routes, isClient, initialState }) => {
        // app.use(vuetify);
        // app.use(loadFonts);
        // app.use(AOS.init());
    },
)