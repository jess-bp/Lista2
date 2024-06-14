/*Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

let A = Math.floor(Math.random() * 100);
let V = Array(30)
	.fill()
	.map(() =>
		Array(30)
			.fill()
			.map(() => Math.floor(Math.random() * 100))
	);

function sameValues() {
	let arrCountA = [];

	V.forEach((arr, i) => {
		if (arr[i] === A) {
			arrCountA.push(arr[i]);
		}
	});

	if (arrCountA.length > 0) {
		console.log(`Valor ${arrCountA}, aparece ${arrCountA.length}x na matriz`);
	} else {
		console.log(`Valor não encontrado na matriz`);
	}
}

let X = V.flatMap((row) => row.filter((e) => e !== A));

sameValues();
console.log("Valor de A:", A);
console.log("Matriz V:", V);
console.log("Matriz X:", X);