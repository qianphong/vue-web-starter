import type { Router } from 'vue-router'
import { getToken } from '@/utils/auth'
import { useAppStoreWithOut } from '@/store/modules/app'

function getPageTitle(pageTitle?: string) {
  const appTitle = useAppStoreWithOut().title
  if (pageTitle) return `${pageTitle} - ${appTitle}`
  return `${appTitle}`
}
const whiteList = ['/login']

export function setupRouterGuard(router: Router) {
  router.beforeEach((to, _, next) => {
    document.title = getPageTitle(to.meta.title)
    if (!whiteList.includes(to.path) && !getToken())
      return next({ path: '/login' })
    next()
  })
}
