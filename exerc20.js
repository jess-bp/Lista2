/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. 
Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome: 
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS)*/

const prompt = require('prompt-sync')();

const funcionarios = [
    func1 = {matricula: "03", nome: "Luigi Pohlmann", salarioBruto: "2200", deducaoInss: " 400", salarioLiquido:"2500"},
    func2 = {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""},
    func3 = {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""},
    func4 =  {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""},
    func5 = {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""}
]

funcionarios.forEach(funcionarios => {
    console.log(
        `\n        Matrícula: ${funcionarios.matricula}
        Nome: ${funcionarios.nome} 
        Salário Bruto: ${funcionarios.salarioBruto} 
        Dedução inss:${funcionarios.deducaoInss}
        Salário liquido: ${funcionarios.salarioLiquido} `);
});