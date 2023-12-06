import { unref } from 'vue'
import {
  type MaybeRef,
  throttledWatch,
  tryOnMounted,
  useWindowSize,
} from '@vueuse/core'

export const useScale = (
  ele: MaybeRef<HTMLElement | undefined>,
  { w, h } = { h: 1080, w: 1920 },
) => {
  tryOnMounted(() => {
    const root = unref(ele)
    if (root) {
      root.style.position = 'absolute'
      root.style.left = '50%'
      root.style.top = '50%'
      root.style.overflow = 'hidden'

      root.style.width = `${w}px`
      root.style.height = `${h}px`

      const { width, height } = useWindowSize()

      throttledWatch(
        [width, height],
        ([parentW, parentH]) => {
          const ratioX = parentW / w
          const ratioY = parentH / h
          root.style.transform = `translate(-50%,-50%) scale(${Math.min(
            ratioX,
            ratioY,
          )})`
        },
        { throttle: 100, immediate: true },
      )
    }
  })
}
