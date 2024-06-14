/*Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.*/

let obj1 = {
	Nome: 'Maria',
	Cargo: 'Professora',
	Cidade: 'Guaíba'
};

let obj2 = {
	Nome: 'João',
	Idade: 32,
	Email: 'joao@gmail.com'
};

function combObjetos(obj1, obj2) {
	return { ...obj1, ...obj2 };
}

let objCombinado = combObjetos(obj1, obj2);

console.log(objCombinado);