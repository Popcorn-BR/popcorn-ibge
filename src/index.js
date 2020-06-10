import 'babel-polyfill';
import ufs from './ufs'
import municipios from './municipios'

export default class PopcornIBGE {
  constructor() {
    this.ufs = ufs;
    this.municipios = municipios;
  }
}
