import { publicRequest } from '@/auth/axios'
import { refreshToken } from '@/services'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface TokenStorage {
  token: string
  name: string
}

export function useAuth() {
  const location = useLocation()
  const navigate = useNavigate()

  const [token, setToken] = useState<string | null>(null)

  async function refreshTokenUser() {
    const tokenStorage = localStorage.getItem('@findAFriend:credential')

    if (!tokenStorage) return navigate('/login')
    const tokenParse: TokenStorage = JSON.parse(tokenStorage)
    const route = refreshToken()

    const { data } = await publicRequest.patch(route, {
      token: `Bearer${token}`,
    })

    const credential = {
      token: data?.token,
      name: tokenParse?.name,
    }

    localStorage.setItem('@findAFriend:credential', JSON.stringify(credential))
    setToken(JSON.stringify(credential))

    return credential.token
  }

  useEffect(() => {
    if (localStorage.getItem('@findAFriend:credential')) {
      setToken(localStorage.getItem('@findAFriend:credential'))
    }
  }, [location.pathname])

  return { isAuthenticated: !!token, refreshTokenUser }
}
