/*Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.*/

let obj = {
	Nome: "Vitor",
	Sobrenome: "Andriotti",
	Idade: 30,
	Nascimento: "23/01/1994",
};

function isString(obj) {
	let count = 0;
	for (let chave in obj) {
		if (typeof obj[chave] === "string") {
			count++;
		}
	}
	return count;
}

let propStrings = isString(obj);
console.log(`Existem ${propStrings} proriedade(s) do tipo String`);