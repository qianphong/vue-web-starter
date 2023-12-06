<script setup lang="ts">
import { useScale } from '@/composables/useScale'

const root = ref<HTMLDivElement | undefined>()
useScale(root)
</script>

<template>
  <div class="screen-wrapper">
    <div ref="root">
      <SettingsFullscreen />
      <RouterView />
    </div>
  </div>
  <div class="fixed bottom-4 left-0 right-0 w-40 mx-auto text-center">
    [screen layout]
  </div>
</template>

<style lang="scss">
.screen-wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  user-select: none;
}
</style>
