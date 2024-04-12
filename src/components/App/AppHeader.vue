<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'

const appStore = useAppStore()
const userStore = useUserStore()

function handleCommand(command: string) {
  switch (command) {
    case 'logout':
      userStore.logout()
      break
    default:
      break
  }
}
</script>

<template>
  <header class="bg-[#0F3ABF] px-10 fixed w-full z-99 flex-bc h-15">
    <h2 class="text-white">{{ appStore.title }}</h2>
    <div class="flex space-x-5 text-white">
      <ElDropdown @command="handleCommand">
        <div class="flex items-center text-white">
          <ElAvatar :size="30">
            <span class="i-mdi-account-circle" />
          </ElAvatar>
          <span class="text-base ml-2">
            {{ userStore.userInfo?.name }}
          </span>
          <ElIcon size="20">
            <span class="i-mdi-menu-down" />
          </ElIcon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">
              <span class="i-mdi-logout-variant mr-2" />
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </ElDropdown>
    </div>
  </header>
</template>
