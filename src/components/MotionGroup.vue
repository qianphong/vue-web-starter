<script setup lang="ts">
import { useMotion, type MotionProperties } from '@vueuse/motion'

const props = withDefaults(
  defineProps<{
    delay?: number
    initial?: MotionProperties
    visible?: MotionProperties
    tag?: keyof HTMLElementTagNameMap
    once?: boolean
  }>(),
  {
    delay: 50,
    tag: 'div',
    initial: () => ({
      opacity: 0,
      y: 10,
    }),
    visible: () => ({
      opacity: 1,
      y: 0,
    }),
  },
)

const parentRef = ref<HTMLDivElement>()
tryOnMounted(() => {
  if (!parentRef.value) return

  const children = parentRef.value.children
  Array.prototype.forEach.call(children, (item: HTMLElement, index) => {
    useMotion(item, {
      initial: props.initial,
      [props.once ? 'visibleOnce' : 'visible']: {
        ...props.visible,
        transition: { delay: index * props.delay },
      },
    })
  })
})
</script>

<template>
  <component :is="tag" ref="parentRef">
    <slot />
  </component>
</template>
