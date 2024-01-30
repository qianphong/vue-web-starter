<script setup lang="ts">
const darkMode = useDark()
function toggleDarkMode() {
  darkMode.value = !darkMode.value
}
function toggleDark(event: MouseEvent) {
  const isAppearanceTransition =
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    toggleDarkMode()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDarkMode()

    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: darkMode ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: darkMode
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <div class="flex items-center text-2xl cursor-pointer" @click="toggleDark">
    <div class="i-mdi-white-balance-sunny dark:i-mdi-weather-night" />
  </div>
</template>

<style lang="scss">
// 颜色模式切换动画相关css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
