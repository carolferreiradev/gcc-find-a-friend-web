import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Map } from '@/pages/Map'
import { PetDetails } from '@/pages/PetDetails'
import { Register } from '@/pages/Register'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet-details/:petId" element={<PetDetails />} />
    </Routes>
  )
}
