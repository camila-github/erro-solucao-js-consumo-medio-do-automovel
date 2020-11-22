## Treinamento Digital Innovation One - Exercicio - Consumo medio do automovel

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Fundamentos Aritméticos em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).


#### Entrada:

Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.


#### Saída:

Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
500 | 14.286 km/l
35.0 |
- | -
2254 | 18.119 km/l
124.4 |
-| -
4554 | 9.802 km/l
464.6 |


#### Javascript

```javascript
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
```
