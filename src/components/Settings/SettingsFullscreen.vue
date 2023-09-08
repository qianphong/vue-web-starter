<script lang="ts" setup>
import type { MaybeElementRef } from '@vueuse/core'
import { isIframe } from '@/utils/is'

const props = withDefaults(
  defineProps<{
    target?: MaybeElementRef
  }>(),
  {
    target() {
      return document.body
    },
  },
)

const { isFullscreen, toggle } = useFullscreen(props.target)
</script>

<template>
  <button v-if="!isIframe()" class="fullscreen-toggle" @click="toggle">
    <template v-if="isFullscreen">
      <div class="fullscreen-icon i-mdi-fullscreen-exit" />
      <span>退出全屏</span>
    </template>
    <template v-else>
      <div class="fullscreen-icon i-mdi-fullscreen" />
      <span>全屏显示</span>
    </template>
  </button>
</template>

<style lang="scss">
.fullscreen-toggle {
  position: absolute;
  z-index: 99;
  right: -82px;
  top: 48px;
  width: 130px;
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgba(37, 99, 235, 0.8);
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  transition: right ease-in-out 0.3s;
  .fullscreen-icon {
    transition: transform ease-in-out 0.5s;
    width: 25px;
    height: 25px;
  }
  &:hover {
    right: 0px;
    .fullscreen-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
