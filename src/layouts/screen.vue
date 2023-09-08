<script setup lang="ts">
import VScaleScreen from 'v-scale-screen'
</script>

<template>
  <VScaleScreen width="1920" height="1080">
    <SettingsFullscreen />
    <RouterView />
  </VScaleScreen>
  <div class="fixed bottom-4 left-0 right-0 w-40 mx-auto text-center">
    [screen layout]
  </div>
</template>
