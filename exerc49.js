/*Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.*/

function categorizaTransacoes(transacao) {
	const result = {};

	transacao.forEach((transacao) => {
		const { categoria, valor } = transacao;

		if (!result[categoria]) {
			result[categoria] = {
				transacao: [],
				subtotal: 0,
			};
		}

		result[categoria].transacao.push(transacao);
		result[categoria].subtotal += valor;
	});
	return result;
}

const transacao = [
	{ id: 1, valor: 200, data: "14/06/2024", categoria: "Lancheria" },
	{ id: 2, valor: 150, data: "13/06/2024", categoria: "Mercado" },
	{ id: 3, valor: 120, data: "12/06/2024", categoria: "Sapataria" },
	{ id: 4, valor: 100, data: "11/06/2024", categoria: "Bazar" },
];

const categorizado = categorizaTransacoes(transacao);
console.log(categorizado);