/*Operadores de Comparação

> - Maior que
>= - Maior que ou igual a 
< - Menor que
<= - Menor que ou igual a
== - Igualdade (Checa valor) *não utilizar*
=== - Igualdade estrita (Checa valor e tipo)
!= - Diferente (Checa valor) *não utilizar*
!== - Diferente estrito (Checa valor e tipo)

*/


const comp = 10 > 5; //Essas expressões sempre retornarão valores boolean
console.log(comp); 


const num1 = 10;
const num2 = 10;

const comp2= num1 <= num2;

console.log(comp2);


const num3 = 10; //a linguagem compara um number com string realizando a conversão de tipos automaticamente 
const num4 = '10';

const comp3= num3 == num4;

console.log(comp3);


const num5 = 10; 
const num6 = 10;

const comp4= num5 !== num6;

console.log(comp3);





