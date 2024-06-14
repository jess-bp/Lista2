/*Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.*/

let V = Array(30)
	.fill()
	.map(() => Math.floor(Math.random() * 100));

let pares = [];
let impares = [];
const MAX_SIZE = 5;

function adicionarValor(valor) {
	if (valor % 2 === 0) {
		pares.push(valor);
		if (pares.length === MAX_SIZE) {
			console.log("Vetor de pares está cheio:", pares);
			pares = [];
		}
	} else {
		impares.push(valor);
		if (impares.length === MAX_SIZE) {
			console.log("Vetor de ímpares está cheio:", impares);
			impares = [];
		}
	}
}

V.forEach((valor) => adicionarValor(valor));

if (pares.length > 0) {
	console.log("Vetor de pares restante:", pares);
}

if (impares.length > 0) {
	console.log("Vetor de ímpares restante:", impares);
}