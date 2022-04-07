/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  const parte1 = `Oi, meu nome é ${name}!\n`;
  const parte2 = `Tenho ${age} anos,\n`;
  const parte3 = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
  if (typeof name !== 'string' || typeof age === 'string') {
    console.log('undefined');
  } else {
    let frase = `${parte1}${parte2}${parte3}`;
    return frase;
  }
};

console.log(vqv('João', 2));
module.exports = vqv;
