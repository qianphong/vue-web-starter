import { defineStore } from 'pinia'
import { store } from '@/store'

export const useAppStore = defineStore('app', () => {
  const darkMode = useDark()
  const title = import.meta.env.VITE_APP_TITLE || ''
  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }

  return {
    title,
    darkMode,
    toggleDarkMode,
  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
