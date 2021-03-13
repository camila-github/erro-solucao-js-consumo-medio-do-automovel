// SOLUCAO 1
const valorDistancia = parseInt(gets());
const valorCombustivel = parseFloat(gets());
const valorConsumoMedio = parseFloat(valorDistancia / valorCombustivel).toFixed(3);
console.log(valorConsumoMedio + " km/l");


// SOLUCAO 2
var valorConsumoMedio = parseFloat(parseInt(gets()) / parseFloat(gets())).toFixed(3);
console.log(valorConsumoMedio + " km/l");


// SOLUCAO 3 
console.log((parseFloat(parseInt(gets()) / parseFloat(gets())).toFixed(3)) + " km/l");