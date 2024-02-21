import type { App } from 'vue'
import { router } from '@/router'
import { store } from '@/store'

export function setupModules(app: App<Element>) {
  Object.values(
    import.meta.glob<{ install?: AppModule }>(['./*.ts', '!./index.ts'], {
      eager: true,
    }),
  ).forEach(i => {
    i.install?.({ app, router, store })
  })
}
