import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useAuth() {
  const location = useLocation()

  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (localStorage.getItem('@findAFriend:credential')) {
      setToken(localStorage.getItem('@findAFriend:credential'))
    }
  }, [location.pathname])

  return { isAuthenticated: !!token }
}
