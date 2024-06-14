/*Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

let matrizA = new Array(10).fill().map(() => new Array(10));

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        matrizA[i][j] = Math.floor(Math.random() * 50);
    }
}

function elementoForaDiagonal(matriz){
    let diagonalSuperior = new Array(1).fill(0);
    let diagonalInferior = new Array(1).fill(0);
                                                                                         
    for(let i = 0; i < matriz.length; i++){
        for(let j = i + 1; j < matriz[i].length; j++){
            diagonalSuperior[0] += matriz[i][j];
        }
    }
     
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < i; j++){
            diagonalInferior[0] += matriz[i][j];
        }
    }
    
    console.log("Matriz 10x10");
    console.table(matriz);
    console.log("Somatorio diagonal superior");
    console.table(diagonalSuperior);
    console.log("Somatorio diagonal inferior");
    console.table(diagonalInferior);
}

elementoForaDiagonal(matrizA);