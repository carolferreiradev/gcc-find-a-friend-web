import { NotFound404 } from '@/components/NotFound404'
import { Dashboard } from '@/pages/Dashboard'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Map } from '@/pages/Map'
import { PetDetails } from '@/pages/PetDetails'
import { Register } from '@/pages/Register'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (localStorage.getItem('@findAFriend:credential')) {
      setToken(localStorage.getItem('@findAFriend:credential'))
    }
  }, [])
  return (
    <Routes>
      <Route path="*" element={<NotFound404 />} />
      <Route path="/" element={<Home />} />
      {!token && <Route path="/login" element={<Login />} />}
      {!token && <Route path="/Register" element={<Register />} />}
      {token && <Route path="/dashboard" element={<Dashboard />} />}
      <Route path="/map" element={<Map />} />
      <Route path="/pet-details/:petId" element={<PetDetails />} />
    </Routes>
  )
}
