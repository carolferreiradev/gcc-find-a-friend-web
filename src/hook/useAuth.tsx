import { refreshToken } from '@/services'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useAuth() {
  const location = useLocation()
  const [token, setToken] = useState<string | null>(null)

  async function refreshTokenUser(tokenStorage) {
    const route = refreshToken()
    setToken(localStorage.getItem('@findAFriend:credential'))
    // const token = await axios.patch(route, { params: tokenStorage })
    // console.log(token, tokenStorage)
  }

  useEffect(() => {
    if (localStorage.getItem('@findAFriend:credential')) {
      refreshTokenUser(localStorage.getItem('@findAFriend:credential'))
    }
  }, [location.pathname])

  return { isAuthenticated: !!token }
}
