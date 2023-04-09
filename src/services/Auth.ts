import { API } from '.'

export function loginSession() {
  return `${API}/auth/sessions`
}
export function refreshToken() {
  return `${API}/auth/refresh-token`
}
