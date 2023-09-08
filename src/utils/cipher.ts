import { encryptByMd5 } from '@qianphong/utils'

export function encryptPwd(password: string) {
  return encryptByMd5(password)
}
