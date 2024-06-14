/*Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro. */

const prompt = require('prompt-sync')();

const registro = {
  nome: '',
  cargo: '',
  salario: ''
}

function registra(){
registro.nome = prompt("Qual o nome do funcionário? ");
registro.cargo = prompt("Qual o cargo desse funcionário? ");
registro.salario = prompt("E qual o salário do funcionário? ");

console.log(`\nNome:${registro.nome}
Cargo:${registro.cargo}
Salário:${registro.salario}`);
}

registra();