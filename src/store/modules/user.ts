import { defineStore } from 'pinia'
import { store } from '@/store'
import { router } from '@/router'
import {
  clearAuthCache,
  getToken,
  setToken,
  getUserInfo,
  setUserInfo,
  getRoles,
  setRules,
} from '@/utils/auth'
import { login } from '@/api'

interface UserState {
  /** token */
  token?: string
  /** 用户信息 */
  userInfo?: UserStore['userInfo']
  /** 角色 */
  roles: string[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: getToken(),
    userInfo: getUserInfo(),
    roles: getRoles() || [],
  }),
  actions: {
    /** 存储Token */
    SET_TOKEN(token: string) {
      this.token = token
      setToken(token)
    },
    /** 存储用户信息 */
    SET_USERINFO(userInfo: UserStore['userInfo']) {
      this.userInfo = userInfo
      setUserInfo(userInfo)
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles
      setRules(roles)
    },
    /** 重置状态 */
    resetState() {
      this.token = ''
      this.roles = []
      this.userInfo = undefined
      clearAuthCache()
    },
    /** 登入 */
    async login(body: UserStore['loginParams']) {
      const data = await login(body)
      // 保存 token
      this.SET_TOKEN(data.token)
      this.SET_ROLES(data.roles)
      this.SET_USERINFO(data)
    },
    /** 前端登出（不调用接口） */
    async logout() {
      this.resetState()
      router.push('/login')
    },
  },
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
