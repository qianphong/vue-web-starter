import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const install: AppModule = ({ router }) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
