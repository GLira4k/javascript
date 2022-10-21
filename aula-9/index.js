// VAR pode ser redeclarada no código, porém, não se ultiliza mais e não é uma boa prática.

var nome = 'Gabriel';
var nome = 'Xavier Lira';

console.log(nome);

nome = 'Luiz'; // NÃO FAÇA ISSO, vai gerar uma variável global no código.

console.log(nome);

// TIPOS PRIMITIVOS JS (string, number, undefined, null, boolean)

const nome = 'Gabriel'; // String
const nome1 = "Luiz"; // String
const nome2 = `Gabriel`; // String
const num1 = 10; // Number
const num2 = 10.5; // Number

let nomeAlun; // undefined = não aponta para local nenhum na memória.
const sobrenomeAluno = null; // null = não aponta para local nenhum na memória.
const aprovado = false; // boolean = true, false (valor lógico).


