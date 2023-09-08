<script setup lang="ts"></script>

<template>
  <AppHeader />
  <main class="relative">
    <RouterView v-slot="{ Component, route }">
      <Transition name="blur">
        <!-- <KeepAlive :include="include" :max="1"> -->
        <component :is="Component" :key="route.path" />
        <!-- </KeepAlive> -->
      </Transition>
    </RouterView>
  </main>
  <div class="fixed bottom-4 left-0 right-0 w-40 mx-auto text-center">
    [default layout]
  </div>
</template>

<style>
/* page transition */
.blur-enter-active,
.blur-leave-active {
  transition: all 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
