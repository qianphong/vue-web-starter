/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
// <reference types="vite-plugin-vue-layouts/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  // 更多环境变量...
  readonly VITE_APP_TITLE: string
  readonly VITE_PUBLIC_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'virtual:generated-layouts' {
  import type { RouteRecordRaw } from 'vue-router'
  export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}

declare module '@vueuse/motion' {
  export const MotionPlugin: any
}
