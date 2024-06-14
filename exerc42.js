/*Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne 
um novo objeto apenas com as propriedades que são arrays. */

let dados = {
	Nome: "Jessica",
	Idade: 35,
	Lazer: ["Passear", "estudar", "assistir séries"],
	Endereco: {
		rua: "Rua Doze",
		número: 460,
	},
	Esportes: ["Muay Thai", "Rugby", "PaintBall"],
};

function filtrarArray(obj) {
	let resultado = {};
	for (let chave in obj) {
		if (Array.isArray(obj[chave])) {
			resultado[chave] = obj[chave];
		}
	}
	return resultado;
}

let propriedadesArray = filtrarArray(dados);
console.log(propriedadesArray);