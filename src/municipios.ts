import { http } from './service/api'
import { Municipio } from './models/municipio'

export function municipios(uf: string) {
  return http<Municipio>(`localidades/estados/${uf}/municipios`)
}