import type { UserStore } from '@/types'

export function Login(
  _params: UserStore['loginParams'],
): Promise<UserStore['userInfo']> {
  return Promise.resolve({
    id: '1',
    name: 'test',
    token: '1111111',
    roles: [],
  })
}
