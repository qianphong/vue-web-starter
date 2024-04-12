<script setup lang="ts">
import { type MotionProperties } from '@vueuse/motion'

const props = withDefaults(
  defineProps<{
    index?: number
    delay?: number
    initial?: MotionProperties
    visible?: MotionProperties
    tag?: keyof HTMLElementTagNameMap
    once?: boolean
  }>(),
  {
    index: 0,
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
const motionOption = computed(() => {
  return {
    initial: props.initial,
    [props.once ? 'visibleOnce' : 'visible']: {
      ...props.visible,
      transition: { delay: props.index * props.delay },
    },
  }
})
</script>

<template>
  <component :is="tag" v-motion="motionOption">
    <slot />
  </component>
</template>
