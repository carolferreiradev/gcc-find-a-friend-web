import { NotFound404 } from '@/components/NotFound404'
import { useAuth } from '@/hook/useAuth'
import { Dashboard } from '@/pages/Dashboard'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Map } from '@/pages/Map'
import { PetCreate } from '@/pages/PetCreate'
import { PetDetails } from '@/pages/PetDetails'
import { Register } from '@/pages/Register'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route path="*" element={<NotFound404 />} />
      {!isAuthenticated && <Route path="/" element={<Home />} />}
      {!isAuthenticated && (
        <Route path="/pet-details/:petId" element={<PetDetails />} />
      )}
      {!isAuthenticated && <Route path="/map" element={<Map />} />}
      {!isAuthenticated && <Route path="/login" element={<Login />} />}
      {!isAuthenticated && <Route path="/Register" element={<Register />} />}
      {isAuthenticated && <Route path="/" element={<Dashboard />} />}
      {isAuthenticated && <Route path="/create-pet" element={<PetCreate />} />}
    </Routes>
  )
}
