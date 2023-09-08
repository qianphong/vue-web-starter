import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupModules } from '@/modules'
import App from '@/App.vue'

import 'uno.css'
import '@/styles/reset.scss'
import '@/styles/main.scss'

async function bootstrap() {
  const app = createApp(App)

  // Configure router
  setupRouter(app)
  // Configure store
  setupStore(app)
  // Configure modules
  setupModules(app)

  app.mount('#app')
}

bootstrap()
