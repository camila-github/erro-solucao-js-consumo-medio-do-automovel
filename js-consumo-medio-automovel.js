//SOLUÇÃO 1
/*Será lido duas entradas e atribuido na variavel*/
var valorDistancia = parseInt(gets());
var valorCombustivel = parseFloat(gets());
/*será calculado, e o resultado terá tres casas decimais depois da virgula*/
var valorConsumoMedio = parseFloat(valorDistancia / valorCombustivel).toFixed(3);
/*imprime o resultado concatenando com string*/
console.log(valorConsumoMedio + " km/l");


//SOLUÇÃO 2 - Resumido
/*Será lido duas entradas.Calculado, e o resultado terá tres casas decimais depois da virgula*/
var valorConsumoMedio = parseFloat(parseInt(gets()) / parseFloat(gets())).toFixed(3);
/*imprime o resultado concatenando com string*/
console.log(valorConsumoMedio + " km/l");

//SOLUÇÃO 3 - Resumido
/*Será lido duas entradas.Calculado. Resultado terá tres casas decimais depois da virgula.Imprime resultado concatenando com string*/
console.log((parseFloat(parseInt(gets()) / parseFloat(gets())).toFixed(3)) + " km/l");