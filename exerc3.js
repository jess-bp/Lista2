/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require ('prompt-sync')();

let distDesejada = parseFloat(prompt("Qual a distância que deseja percorrer em km? "));

if(distDesejada <= 200){
    let passagem1 = distDesejada * 0.50;
    console.log("O total da sua viagem é de R$", passagem1, "reais!");
}else{
    let passagem2 = distDesejada * 0.45;
    console.log("O total da sua viagem é de R$", passagem2, "reais!");
}