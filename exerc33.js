/*Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.*/

let M = Array(3)
	.fill()
	.map(() =>
		Array(3)
			.fill(0)
			.map(() => Math.floor(Math.random() * 30))
	);

function calcularMediaDiagonalSecundaria(matriz) {
	let soma = 0;
	for (let i = 0; i < 3; i++) {
		soma += matriz[i][2 - i];
	}
	return (soma / 3).toFixed(2);
}

function multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria) {
	for (let i = 0; i < 3; i++) {
		matriz[i][i] *= mediaDiagonalSecundaria;
	}
}

let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(M);
console.log("Média da diagonal secundária:", mediaDiagonalSecundaria);

multiplicarDiagonalPrincipal(M, mediaDiagonalSecundaria);
console.log("Matriz após a multiplicação da diagonal principal: ");
for (let i = 0; i < 3; i++) console.log(M[i].join(", "));