//Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require ('prompt-sync')();

const numSorteado = Math.floor(Math.random() * 5) + 1;
let chute;

do {
    chute = parseInt(prompt("Entre 1 e 5, qual número foi acredita que foi sorteado:"));
    if (chute < numSorteado) {
        console.log("Tente um número maior.");
    } else if (chute > numSorteado) {
        console.log("Tente um número menor.");
    }
} while (chute !== numSorteado);

console.log("Você acertou o número!");