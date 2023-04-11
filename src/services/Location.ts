export function statesList() {
  return `/location/states`
}

export function cityList(uf: string) {
  return `/location/citys/${uf}`
}

export function coordinatesByZipCode(cep: string) {
  return `/location/coordinates/${cep}`
}
