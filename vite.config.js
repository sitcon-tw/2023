import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
// import vuetify from '@vuetify/vite-plugin'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
    base: '/2023/',
    plugins: [
        vue(),
        // vuetify({
        //     autoImport: true,
        // }),
        Components({
            extensions: ['vue'],
            directoryAsNamespace: true,
            include: [/\.vue$/, /\.vue\?vue/],
            dts: true,
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.css', 'scss', 'sass'],
    },
    ssgOptions: {
        dirStyle: 'nested',
        formatting: "minify"
    },
})