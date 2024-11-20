import { ref } from 'vue'
// // usage:
// async function sendSms() {
//   if (!formRef.value) return
//   await formRef.value.validateField(['mobile'])
//   try {
//     start()
//     await requestSms({
//       mobile: formData.value.mobile,
//       type: encryptPwd(`register;${dayjs().format('YYYY-MM-DD HH:mm:ss')}`),
//     })
//   } catch {
//     end()
//   }
// }

export const useVerifyCode = () => {
  let timer: number

  const loading = ref(false)
  const countDown = ref(0)
  const text = computed(() => {
    if (loading.value) {
      return `${countDown.value}s后重新获取`
    }
    return '获取验证码'
  })

  const start = async (time = 60) => {
    countDown.value = time
    loading.value = true

    clearInterval(timer)

    timer = setInterval(() => {
      if (countDown.value === 1) end()
      countDown.value -= 1
    }, 1000)
  }

  const end = () => {
    loading.value = false
    clearInterval(timer)
  }
  tryOnUnmounted(end)
  return {
    loading,
    text,
    start,
    end,
  }
}
