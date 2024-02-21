import { MotionPlugin } from '@vueuse/motion'

export const install: AppModule = ({ app }) => {
  app.use(MotionPlugin)
}
