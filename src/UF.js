import api from './service/api'

export default async function UF() {
  return await api('localidades/estados')
}
