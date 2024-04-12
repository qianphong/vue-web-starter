<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import { encryptPwd } from '@/utils/cipher'

const userStore = useUserStore()
const formRef = ref<FormInstance>()
const [loading, toggleLoading] = useToggle(false)
const formData = ref<UserStore['loginParams']>({
  userName: 'user',
  password: '123456',
})
const rules = {
  userName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}
const router = useRouter()
async function handleSubmit() {
  if (!formRef.value) return
  try {
    await formRef.value.validate()
    toggleLoading()
    await userStore.login({
      userName: formData.value.userName,
      password: encryptPwd(formData.value.password),
    })
    router.replace('/')
  } finally {
    toggleLoading()
  }
}
</script>

<template>
  <div
    class="h-screen w-screen relative bg-blue-100 dark:bg-gray-600 flex items-center justify-center lg:justify-end lg:pr-20"
  >
    <div
      class="w-[400px] shadow rounded-lg p-10 pb-5 max-w-full bg-white dark:bg-gray-800 m-5"
    >
      <Motion :delay="50" class="mb-10 text-xl font-bold">
        您好，欢迎登录
      </Motion>
      <ElForm
        ref="formRef"
        :model="formData"
        :rules="rules"
        @submit.prevent="handleSubmit"
      >
        <Motion>
          <ElFormItem label="账号" prop="userName">
            <ElInput
              v-model="formData.userName"
              placeholder="请输入账号"
              clearable
            />
          </ElFormItem>
        </Motion>
        <Motion :index="1">
          <ElFormItem label="密码" prop="password">
            <ElInput
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
              type="password"
            />
          </ElFormItem>
        </Motion>
        <Motion :index="2">
          <ElFormItem class="mt-10">
            <ElButton
              type="primary"
              class="w-full"
              native-type="submit"
              :loading="loading"
            >
              登录
            </ElButton>
          </ElFormItem>
        </Motion>
      </ElForm>
    </div>
  </div>
</template>

<route lang="yaml">
name: Login
meta:
  title: 登录
  layout: blank
</route>
