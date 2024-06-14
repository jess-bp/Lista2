/*Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

let A = Array(100)
	.fill()
	.map(() =>
		Math.random() > 0.1 ? Math.floor(Math.random() * 199) - 99 : null
	);
	
console.log(A);

let B = A.filter((x) => x !== null && x >= 0);

console.log(B);