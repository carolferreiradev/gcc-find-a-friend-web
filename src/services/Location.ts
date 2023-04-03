import { API } from '.'

export function statesList() {
  return `${API}/location/states`
}

export function cityList(uf: string) {
  return `${API}/location/citys/${uf}`
}

export function coordinatesByZipCode(cep: string) {
  return `${API}/location/coordinates/${cep}`
}
