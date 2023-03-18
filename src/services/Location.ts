import { API } from '.'

export async function statesList() {
  const response = await fetch(`${API}/location/states`)
  return response.json()
}

export async function cityList(uf: string) {
  const response = await fetch(`${API}/location/citys/${uf}`)
  return response.json()
}
