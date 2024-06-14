/*Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. 
Escrever a matriz e os vetores criados.*/

let M = Array(5)
	.fill()
	.map(() =>
		Array(5)
			.fill(0)
			.map(() => Math.floor(Math.random() * 9))
	);

let SL = Array(5).fill(0);
let SC = Array(5).fill(0);

for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		SL[i] += M[i][j];
		SC[j] += M[i][j];
	}
}

function printMatrixAndSums(matrix, SL, SC) {
	console.log("Matriz M(5,5):");
	matrix.forEach((row) => console.log(row.join(" ")));

	console.log("\nVetor SL (somas das linhas):");
	console.log(SL.join(" "));

	console.log("\nVetor SC (somas das colunas):");
	console.log(SC.join(" "));
}

printMatrixAndSums(M, SL, SC);