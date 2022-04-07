/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numbers) => {
  let soma = 0;
  if (numbers === [] || Number.isNaN(numbers)) {
    throw new Error('undefined');
  }
  for (let i = 1; i <= numbers.length; i += 1) {
    soma += numbers[i];
  }
  try {
    console.log(soma / numbers.length);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = average;
