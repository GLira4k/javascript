// VAR pode ser redeclarada no código, porém, não se ultiliza mais e não é uma boa prática.

var nome = 'Gabriel';
var nome = 'Xavier Lira';

console.log(nome);

nome = 'Luiz'; // NÃO FAÇA ISSO, vai gerar uma variável global no código.

console.log(nome);

