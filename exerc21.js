/*Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: 
peso ideal= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require('prompt-sync')();

altura = prompt("Digite sua altura (utilize ponto ao invés de virgula): ");
sexo = prompt("Digite seu sexo: ");
   
if(sexo === 'M' || sexo === 'm'){
    let pesoMasc = (72.7 * altura) - 58
    console.log(`Seu peso ideal é `, pesoMasc);
}
else if(sexo === 'F' || sexo === 'f'){
    let pesoFem = (62.1 * altura) - 44.7
    console.log(`Seu peso ideal é `, pesoFem);
}
else{
    console.log(`Tente novamente!`);
}