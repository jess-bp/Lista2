/*Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.*/

const obj = { a: 6, b: 10, c: 7 };

function multiplicar(obj) {
  const novoObj = {};

  for (let chave in obj) {
    novoObj[chave] = obj[chave] * 2;
  }
  return novoObj;
}

console.log(multiplicar(obj));