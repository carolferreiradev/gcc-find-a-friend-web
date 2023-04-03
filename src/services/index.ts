import { loginSession } from '@/services/Auth'
import { cityList, coordinatesByZipCode, statesList } from '@/services/Location'
import { createORG } from '@/services/ORG'
import {
  petAdoptionRequirements,
  petDetail,
  petGallery,
  petListByCity,
} from '@/services/Pet'

export const API = import.meta.env.VITE_API_URL

export {
  statesList,
  cityList,
  createORG,
  petAdoptionRequirements,
  petDetail,
  petGallery,
  petListByCity,
  loginSession,
  coordinatesByZipCode,
}

