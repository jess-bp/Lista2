/*Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. */

const pessoa = {
	nome: "Luigi", idade: "3 anos",
  };

  console.log(pessoa.nome, 'com idade de' ,pessoa.idade);
 // console.log(`A idade é de ${pessoa.idade}`);

  console.log("\n");
  pessoa.email = 'luigi.fotos@email.com';
  console.log(pessoa.nome, 'com idade de' ,pessoa.idade, 'e e-mail atual: ',pessoa.email);