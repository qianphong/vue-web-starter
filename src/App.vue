<script lang="ts" setup>
import { THEME_KEY } from 'vue-echarts'
import { useAppStore } from '@/store/modules/app'
// 初始化store 状态，否则暗色模式不应用
const appStore = useAppStore()
const theme = computed(() => {
  return appStore.darkMode ? 'dark' : 'light'
})
provide(THEME_KEY, theme)
</script>

<template>
  <RouterView />
</template>
