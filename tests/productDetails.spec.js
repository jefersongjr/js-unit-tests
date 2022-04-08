const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {});
  // ESCREVA SEUS TESTES ABAIXO:
  it('Verifica se se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o retorno da função é um array.', () => {
    const produtos1 = productDetails(['celular', 'notebook']);
    expect(Array.isArray(produtos1)).toBeTruthy();
  });

  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('celular', 'notebook').length).toBe(2);
  });

  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('celular', 'notebook')[0]).toBe('object');
    expect(typeof productDetails('celular', 'notebook')[1]).toBe('object');
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const produtos1 = productDetails('agulha', 'linha');
    const produtos2 = productDetails('notebook', 'celular'); 
    const produtos3 = productDetails('notebook', 'notebook'); 
   
    expect(JSON.stringify(produtos1[0]) !== JSON.stringify(produtos1[1])).toBeTruthy();
    expect(JSON.stringify(produtos2[0]) !== JSON.stringify(produtos2[1])).toBeTruthy()
    expect(JSON.stringify(produtos3[0]) !== JSON.stringify(produtos3[1])).toBeFalsy()
    
  });

  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    const produtos1 = productDetails('notebook', 'celular')
   
    expect(produtos1[0].details.productId.endsWith('123')).toBeTruthy();
    expect(produtos1[1].details.productId.endsWith('123')).toBeTruthy();
  });
  // Teste se os dois productIds terminam com 123.
});

/*Referências de pesquisa 
https://dev.to/frugencefidel/10-javascript-string-methods-you-should-know-4l76 - Atanes divulgou no Slack
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
https://www.w3schools.com/js/js_json_stringify.asp

*/