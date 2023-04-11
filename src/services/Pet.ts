export function petDetail(petId: string) {
  return `/pets/show/${petId}`
}

export function petListByCity(city: string) {
  return `/pets/${city}`
}

export function petGallery(petId: string) {
  return `/pets/gallery/${petId}`
}

export function petAdoptionRequirements(petId: string) {
  return `/pets/adoption-requirements/${petId}`
}

export function createPet() {
  return `/pets`
}
