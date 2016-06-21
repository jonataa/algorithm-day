var assert  = require('chai').assert,
    jokenpo = require('../src/jokenpo.js'),
    labels  = jokenpo.labels;

describe('Jokenpo', function() {
  describe('pedra empata com pedra e ganha de tesoura', function () {
    assert.equal(labels.EMPATE, jokenpo.jogar(labels.PEDRA, labels.PEDRA));
    assert.equal(labels.PEDRA, jokenpo.jogar(labels.PEDRA, labels.TESOURA));
    assert.equal(labels.PEDRA, jokenpo.jogar(labels.TESOURA, labels.PEDRA));
  });

  describe('tesoura empata com tesoura e ganha de papel', function () {
    assert.equal(labels.EMPATE, jokenpo.jogar(labels.TESOURA, labels.TESOURA));
    assert.equal(labels.TESOURA, jokenpo.jogar(labels.TESOURA, labels.PAPEL));
    assert.equal(labels.TESOURA, jokenpo.jogar(labels.PAPEL, labels.TESOURA));
  });

  describe('papel empata com papel e ganha de pedra', function () {
    assert.equal(labels.EMPATE, jokenpo.jogar(labels.PAPEL, labels.PAPEL));
    assert.equal(labels.PAPEL, jokenpo.jogar(labels.PAPEL, labels.PEDRA));
    assert.equal(labels.PAPEL, jokenpo.jogar(labels.PEDRA, labels.PAPEL));
  });
});