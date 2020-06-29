import { http } from './service/api'
import { UF } from './models/uf'

export async function ufs() {
  return await http<UF>('localidades/estados')
}