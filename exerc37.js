/*Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; 
e mostre uma mensagem de “REPROVADO”, caso contrário.*/

let gabarito = Array(20)
	.fill(0)
	.map(() => Math.floor(Math.random() * 20));

let R = Array(50)
	.fill(0)
	.map(() => Math.floor(Math.random() * 100) + 1);

let acertos = [];

for (arr of [gabarito]) {
	arr.filter((x) => {
		if (R.includes(x)) {
			acertos.push(x);
		}
	});
}

if (acertos.length >= 12) {
	console.log(`${acertos.length} acertos: APROVADO`);
} else {
	console.log(`${acertos.length} acertos: REPROVADO`);
}