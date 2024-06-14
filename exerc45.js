/*Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.*/

function countStrings(arr) {
	return arr.reduce((acc, chave) => {
		acc[chave] = (acc[chave] || 0) + 1;
		return acc;
	}, {});
}

const strings = [
	"arroz",
	"feijão",
	"macarrão",
	"farinha",
	"açúcar",
	"macarrão",
	"farinha",
	"açúcar",
	"macarrão",
];

const count = countStrings(strings);
console.log(count);