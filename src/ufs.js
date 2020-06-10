import api from './service/api'

export default function ufs() {
  return api('localidades/estados')
}
