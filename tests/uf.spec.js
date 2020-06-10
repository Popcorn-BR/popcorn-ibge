import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

import PopcornIBGE from '../src/index'

describe('UF', () => {
  let ibge;
  beforeEach( () => {
    ibge = new PopcornIBGE();

    // fetchedStub = sinon.stub(global, 'fetch');
    // fetchedStub.resolves({ json: () => {} });
  });
  describe('smoke testes', () => {
    it('should exist the spotify.search.albums method', () => {
      expect(ibge.uf).to.exist;
    });
  })

})
