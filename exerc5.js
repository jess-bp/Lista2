//Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require ('prompt-sync')();

let player1 = parseInt(prompt("Player 1: escolha uma opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura "));
let player2 = parseInt(prompt("Player 2: escolha uma opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura "));

if((player1 == 1 && player2 == 3) || (player1 == 3 && player2 == 2) || (player1 == 2 && player2 == 1)){
    console.log("O player1 venceu esta rodada!");
}else if((player2 == 1 && player1 == 3) || (player2 == 3 && player1 == 2) || (player2 == 2 && player1 == 1)){
    console.log("O player2 venceu esta rodada!");
}else if((player1 == 1 && player2 == 1) || (player1 == 2 && player2 == 2) || (player1 == 3 && player2 == 3)){
    console.log("Empatou!!");
}else{
    console.log("Insira apenas o número da opção desejada!");
}
    