import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WebConfig from 'vite-plugin-web-config'
import VueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_PUBLIC_PATH || '/',
    plugins: [
      Vue(),
      VueDevTools(),
      UnoCSS(),
      WebConfig(),
      VueRouter({
        dts: 'src/types/typed-router.d.ts',
        exclude: ['**/components/**', '**/**/*.ts'],
      }),
      Layouts(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'src/types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        dts: 'src/types/components.d.ts',
      }),
      env.VITE_ENABLE_ANALYZE &&
        visualizer({
          filename: './node_modules/.cache/visualizer/stats.html',
          open: true,
        }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    resolve: {
      alias: {
        '@': `${resolve(__dirname, './src')}`,
        '#': `${resolve(__dirname, './types')}`,
      },
    },
  }
})
