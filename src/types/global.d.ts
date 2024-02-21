import type { App } from 'vue'
import type { Router } from 'vue-router'

declare global {
  type AppModule = (ctx: { app: App; router: Router; store: Pinia }) => void

  type UserStore = {
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
}
