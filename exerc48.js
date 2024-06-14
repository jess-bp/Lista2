/*Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.*/

const inventarioLojaA = {
	maçã: 7,
	banana: 12,
	couve: 4,
};
  
const inventarioLojaB = {
	banana: 7,
	beterraba: 3,
	laranja: 5,
};
  
const inventarioCombinado = {};
  
function combinarInventarios(inventarioLojaA, inventarioLojaB) {
	for (let item in inventarioLojaA) {
		inventarioCombinado[item] = inventarioLojaA[item];
	}
  
	for (let item in inventarioLojaB) {
		if (inventarioCombinado[item] !== undefined) {
			inventarioCombinado[item] += inventarioLojaB[item];
		} else {
			inventarioCombinado[item] = inventarioLojaB[item];
		}
	}
    return inventarioCombinado;
}
  
console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));