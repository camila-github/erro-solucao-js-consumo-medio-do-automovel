//SOLUCAO 1
var valorDistancia = parseInt(gets());
var valorCombustivel = parseFloat(gets());
var valorConsumoMedio = parseFloat(valorDistancia / valorCombustivel).toFixed(3);
console.log(valorConsumoMedio + " km/l");

//SOLUCAO 2 - Resumido
var valorConsumoMedio = parseFloat(parseInt(gets()) / parseFloat(gets())).toFixed(3);
console.log(valorConsumoMedio + " km/l");

//SOLUCAO 3 - Resumido
console.log((parseFloat(parseInt(gets()) / parseFloat(gets())).toFixed(3)) + " km/l");