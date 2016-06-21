const labels = {
  EMPATE:  'empate',
  PEDRA:   'pedra',
  PAPEL:   'papel',
  TESOURA: 'tesoura'
}; 

var jokenpo = {
  
  labels: labels,

  jogar: function (x, y) {
    if (x === y) {
      return labels.EMPATE;
    }
  }
  
};

module.exports = jokenpo;