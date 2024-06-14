/*Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. 
Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".*/

let gabarito = Array(13)
	.fill(0)
	.map(() => Math.floor(Math.random() * 13) + 1);
let apostadores = Array(100)
	.fill(0)
	.map(() => Math.floor(Math.random() * 100) + 1);

let best_match = [];

for (arr of [gabarito]) {
	let interseccao = apostadores.filter((x) => arr.includes(x));
	if (best_match.length < gabarito.length) {
		best_match = interseccao;
	}
}

if (best_match.length >= 13)
	console.log("Parabéns, tu foi o GANHADOR", best_match);