var assert  = require('chai').assert,
    jokenpo = require('../src/jokenpo.js');

describe('Jokenpo', function() {
  describe('pedra empata com pedra e ganha de tesoura', function () {
    assert.equal(jokenpo.EMPATE, jokenpo.jogar(jokenpo.PEDRA, jokenpo.PEDRA));
    assert.equal(jokenpo.PEDRA, jokenpo.jogar(jokenpo.PEDRA, jokenpo.TESOURA));
    assert.equal(jokenpo.PEDRA, jokenpo.jogar(jokenpo.TESOURA, jokenpo.PEDRA));
  });

  describe('tesoura empata com tesoura e ganha de papel', function () {
    assert.equal(jokenpo.EMPATE, jokenpo.jogar(jokenpo.TESOURA, jokenpo.TESOURA));
    assert.equal(jokenpo.TESOURA, jokenpo.jogar(jokenpo.TESOURA, jokenpo.PAPEL));
    assert.equal(jokenpo.TESOURA, jokenpo.jogar(jokenpo.PAPEL, jokenpo.TESOURA));
  });

  describe('papel empata com papel e ganha de pedra', function () {
    assert.equal(jokenpo.EMPATE, jokenpo.jogar(jokenpo.PAPEL, jokenpo.PAPEL));
    assert.equal(jokenpo.PAPEL, jokenpo.jogar(jokenpo.PAPEL, jokenpo.PEDRA));
    assert.equal(jokenpo.PAPEL, jokenpo.jogar(jokenpo.PEDRA, jokenpo.PAPEL));
  });
});