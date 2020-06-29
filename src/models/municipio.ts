import { UF } from './uf'
export interface Municipio {
  id: number
  nome: string
  microrregiao: Microrregiao
}

interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

interface Mesorregiao {
  id: number
  nome: string
  UF: UF
}