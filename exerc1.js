/*Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
*/
const prompt = require('prompt-sync')();

let qtCigarroDia = parseInt (prompt("Quantos cigarros você fuma por dia? "));
let anosFumando = parseInt(prompt("Quantos anos você já fumou? "));

let tempoPerdidoMin = ((qtCigarroDia * 10) * (anosFumando * 365)); // min por ano
let tempoPerdido = tempoPerdidoMin / 1440; // min para dia

console.log("Você já perdeu", tempoPerdido, "dias da tua vida!");