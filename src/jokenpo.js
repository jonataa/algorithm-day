const EMPATE  = 'empate',
      PEDRA   = 'pedra',
      PAPEL   = 'papel',
      TESOURA = 'tesoura';

var jogadas = {};

jogadas[PEDRA] = {};
jogadas[PEDRA][TESOURA] = PEDRA;
jogadas[PEDRA][PAPEL] = PAPEL;
jogadas[TESOURA] = {};
jogadas[TESOURA][PEDRA] = PEDRA;
jogadas[TESOURA][PAPEL] = TESOURA;
jogadas[PAPEL] = {};
jogadas[PAPEL][PEDRA] = PAPEL;
jogadas[PAPEL][TESOURA] = TESOURA;

var jokenpo = {
  
  EMPATE: EMPATE,
  PEDRA: PEDRA,
  PAPEL: PAPEL,
  TESOURA: TESOURA,

  jogar: function (x, y) {
    if (x === y) {
      return EMPATE;
    }

    if (typeof jogadas[x] !== 'undefined'
        && typeof jogadas[x][y] !== 'undefined') {
      return jogadas[x][y];
    }

  }

};

module.exports = jokenpo;