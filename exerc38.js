/*Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

let prompt = require("prompt-sync")();

function operacoesVetor() {
	let vetor = [2, 4, 6, 8, 10, 12];

	console.log(`
  1- Soma dos elementos;
  2- Produto dos elementos;
  3- Média dos elementos;
  4- Ordene os elementos em ordem crescente;
  5- Mostre o vetor.
  `);

	let identificador = parseInt(prompt("Escolha uma opção: "));

	let resultado;

	switch (identificador) {
		case 1:
			resultado = vetor.reduce((acc, val) => acc + val, 0);

			console.log("Soma dos elementos:", resultado.toFixed(2));
			break;

		case 2:
			resultado = vetor.reduce((acc, val) => acc * val, 1);
			console.log("Produto dos elementos:", resultado.toFixed(2));
			break;

		case 3:
			resultado = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
			console.log("Média dos elementos:", resultado.toFixed(2));
			break;

		case 4:
			resultado = [...vetor].sort((a, b) => a - b);
			console.log("Vetor ordenado em ordem crescente:", resultado.toFixed(2));
			break;

		case 5:
			console.log("Vetor:", vetor);
			break;

		default:
			console.log("Identificador inválido.");
			break;
	}
}

operacoesVetor();