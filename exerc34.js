/*Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.*/

let M = Array(50)
	.fill()
	.map(() =>
		Array(50)
			.fill()
			.map(() => Math.floor(Math.random() * 9) + 1)
	);

let X = Array(50)
	.fill()
	.map(() => Array(50).fill(0));

console.log("Matriz original:");
M.forEach((row) => console.log(row.join(", ")));

for (let i = 0; i < 50; i++) {
	let diagonalElement = M[i][i];
	for (let j = 0; j < 50; j++) {
		X[i][j] = M[i][j] * diagonalElement;
	}
}

console.log("Matriz após as multiplicações:");
X.forEach((row) => console.log(row.join(", ")));