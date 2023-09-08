import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import type { RouteRecordRaw } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { setupRouterGuard } from './guard'

export const router = createRouter({
  extendRoutes(routes) {
    return routes.map(route => {
      return recursiveLayouts(route)
    })
  },
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
})
setupRouterGuard(router)
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++) {
      route.children[i] = recursiveLayouts(route.children[i])
    }
    return route
  }
  return setupLayouts([route])[0]
}
