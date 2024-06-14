/*Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao 
resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)*/

const resultadoOficial = [3, 12, 19, 27, 45];

const apostas = Array.from({ length: 50 }, () =>
	Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1)
);

console.log(apostas);

const isGanhador = (aposta, resultado) =>
	aposta.every((num) => resultado.includes(num));

apostas.forEach((aposta, index) => {
	if (isGanhador(aposta, resultadoOficial)) {
		console.log(`Aposta ${index + 1}: Ganhador`);
	} else {
		console.log(`Aposta ${index + 1}: Não Ganhador`);
	}
});