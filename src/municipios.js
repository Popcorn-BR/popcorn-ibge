import api from './service/api'
export default function municipios(uf) {
  return api(`localidades/estados/${uf}/municipios`)
}
