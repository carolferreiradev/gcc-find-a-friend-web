import { API } from '.'

export function petDetail(petId: string) {
  return `${API}/pets/show/${petId}`
}

export function petListByCity(city: string) {
  return `${API}/pets/${city}`
}

export function petGallery(petId: string) {
  return `${API}/pets/gallery/${petId}`
}

export function petAdoptionRequirements(petId: string) {
  return `${API}/pets/adoption-requirements/${petId}`
}
