import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { setupRouterGuard } from './guard'

export const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
})
setupRouterGuard(router)
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
