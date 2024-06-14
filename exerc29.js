/*Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz */

let matrizA = new Array(5).fill().map(() => new Array(5));

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        matrizA[i][j] = Math.floor(Math.random() * 50);
    }
}

function calculosMatriz(recebeMatriz){
    let somaLinha4 = new Array(1).fill(0);
    let somaColuna2 = 0;
    let somaDiagonal = 0;

    for(let j = 0; j < recebeMatriz[3].length; j++){
        somaLinha4[0] += recebeMatriz[3][j];             
    }

    recebeMatriz.forEach(linha => {
        somaColuna2 += linha[2];
    });

    recebeMatriz.forEach(linha => {
        somaDiagonal += linha[0]++;
    });

    console.log("Matriz"); 
    console.table(recebeMatriz);
    console.log("Soma da linha 4"); 
    console.table(somaLinha4);
    console.log("Soma da coluna 2");  
    console.log(somaColuna2); 
    console.log("Soma da diagonal"); 
    console.log(somaDiagonal); 
}

calculosMatriz(matrizA);