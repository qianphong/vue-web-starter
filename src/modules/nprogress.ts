import type { UserModule } from '@/types'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
