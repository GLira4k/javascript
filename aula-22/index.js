/* Operadores Logicos

&& = AND - todas as expressões precisam ser true para retornar true
|| = OR - caso tenha apenas uma expressão true será retornado true, só retornará false se todas as expressões forem false
! = NOT - inverte os operadores

*/

const expressao1 = true && true && true && false;
console.log(expressao1);

// Exemplo 'And'
const usuario = 'Gabriel';
const senha = '123456';

const vailogar = usuario === 'Gabriel' && senha === "123456";

console.log(vailogar);


const expressao2 = true || false;
console.log(expressao2);

console.log(!false);




