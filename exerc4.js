/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/
const prompt = require ('prompt-sync')();

let reta1 = parseFloat(prompt("Insira o tamanho da primeira reta? "));
let reta2 = parseFloat(prompt("Insira o tamanho da segunda reta? "));
let reta3 = parseFloat(prompt("Insira o tamanho da terceira reta? "));

if(((reta1 + reta2) > reta3) && ((reta2 + reta3) > reta1) && ((reta3 + reta1) > reta2)){
    console.log("É possível forma um triângulo com as medidas informadas!");
}else{
    console.log("Não foi possível formar um triângulo com as medidas informadas!");
}

