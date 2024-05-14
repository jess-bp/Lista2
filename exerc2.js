/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/
const prompt = require ('prompt-sync')();
let velocidade = parseInt(prompt("Qual a velocidade do carro? "));

if (velocidade > 80){
    let multa = ((velocidade - 80) * 5);
    console.log("Você excedeu o limite de velocidade e foi multado em R$", multa, "reais!");
}else{
    console.log("Faça uma boa viagem!");
}