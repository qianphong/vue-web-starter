<script setup lang="ts">
withDefaults(defineProps<{ delay: number }>(), {
  delay: 50,
})
</script>

<template>
  <div
    v-motion="{
      initial: { opacity: 0, y: 100 },
      enter: { opacity: 1, y: 0, transition: { delay } },
    }"
  >
    <slot />
  </div>
</template>
