import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { useDialogStore } from './store/dialog'
import '@mdi/font/css/materialdesignicons.css';
// Vuetify
import vuetify from '@/plugins/vuetify'

import App from './App.vue'
import cfpLayout from '@/layout/cfp.vue'
import notFoundLayout from '@/layout/not-found.vue'
import 'vue3-openlayers/dist/vue3-openlayers.css'
import IndexView from '@/pages/index2023.vue';
export const createApp = ViteSSG(
    App, {
        base: '/2023/',
        routes: [{
                path: '/cfp',
                component: cfpLayout,
                children: [...Object.entries(
                    import.meta.glob('./pages/cfp/*.vue')).map(
                    ([p, component]) => {
                        const PAGE_DIR = '../pages'
                        const PAGE_EXT = '.vue'
                        const PAGE_INDEX = 'index'

                        let path = p.substring(PAGE_DIR.length, p.length - PAGE_EXT.length)
                        if (path.endsWith(PAGE_INDEX)) {
                            path = path.substring(0, path.length - PAGE_INDEX.length - 1)
                        }
                        if (!path) {
                            path = '/'
                        }
                        if (!path.startsWith('/')) {
                            path = '/' + path
                        }
                        return {
                            path,
                            component,
                        }
                    },
                )]
            },
            {
                path: '/notfound',
                name: '404',
                component: notFoundLayout,
            },
            {
                path: '/',
                component: IndexView
            },
            // {
            //   path: '/',
            //   component: defaultLayout,
            //   children: [
            //     ...Object.entries(import.meta.glob('./pages/*.vue')).map(
            //       ([p, component]) => {
            //         const PAGE_DIR = '../pages'
            //         const PAGE_EXT = '.vue'
            //         const PAGE_INDEX = 'index'

            //         let path = p.substring(PAGE_DIR.length, p.length - PAGE_EXT.length)
            //         if (path.endsWith(PAGE_INDEX)) {
            //           path = path.substring(0, path.length - PAGE_INDEX.length - 1)
            //         }
            //         if (!path) {
            //           path = '/'
            //         }
            //         if (!path.startsWith('/')) {
            //           path = '/' + path
            //         }
            //         return {
            //           path,
            //           component,
            //         }
            //       },
            //     ),
            //     ...sessionData.sessions
            //       .map(x => x.id)
            //       .map(x => ({
            //         path: `/agenda/${x}`,
            //         component: () => import(`./pages/agenda.vue`),
            //         meta: {
            //           id: x,
            //         }
            //       })),
            //     {
            //       path: '/:pathMatch(.*)',
            //       redirect: '/notfound'
            //     }
            //   ]
            // },
            //
        ],
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                return {
                    el: to.hash,
                    behavior: 'smooth',
                }
            }
            if (savedPosition) {
                return savedPosition
            }
            if (to.path.startsWith('/agenda/')) {
                return
            }
            return { top: 0 }
        }
    },
    async({ app, router, routes, isClient, initialState }) => {
        const pinia = createPinia()

        app.use(pinia)
        app.use(vuetify);
        if (
            import.meta.env.SSR)
            initialState.pinia = pinia.state.value
        else
            pinia.state.value = initialState.pinia || {}
        router.beforeEach((to, from, next) => {
            const store = useDialogStore(pinia)
                // if (!store.ready)
                //   // perform the (user-implemented) store action to fill the store's state
                //   store.initialize()
            next()
        })
        if (isClient) {
            app.use(await
                    import ('vue3-openlayers'))
                // app.use(await import('vue3-markdown-it'))
        }
    },
)