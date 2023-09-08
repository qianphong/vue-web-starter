import type { App } from 'vue'
import type { Router } from 'vue-router'

export type UserModule = (ctx: {
  app: App
  router: Router
  store: Pinia
}) => void

export type UserStore = {
  loginParams: {
    userName: string
    password: string
  }
  userInfo: {
    id: string | number
    name: string
    token: string
    roles: string[]
  }
}
