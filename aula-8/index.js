/*Gabriel Xavier Lira tem 21 anos, pesa 74kg, tem 1.74 de altura e sei IMC é de 24,44*/

const nome = 'Gabriel';
const sobrenome =  'Xavier Lira';
const idade = 21;
const peso = 74;
const alturaEmM = 1.74;

let indiceMassaCorporal;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

let anoNascimento;
anoNascimento = 2022 - idade;
 
console.log(nome + ' ' + sobrenome + ' nascido em ' + anoNascimento + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ')
console.log(`tem ${alturaEmM} + de altura e seu IMC é de ${indiceMassaCorporal}.`); 





 