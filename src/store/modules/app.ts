import { defineStore } from 'pinia'
import { store } from '@/store'

export const useAppStore = defineStore('app', () => {
  const title = import.meta.env.VITE_APP_TITLE || ''

  return {
    title,
  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
