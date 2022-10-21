/* Operadores Aritméticos (+, -, /,*) 

- (+) Adição e concatenação (junção de valores (string+number))
- (-) Subtração
- (*) Multiplicação
- (/) Divisão
- (**) Pontenciação
- (%) Resto da divisão

*/


const num1 = 5;
const num2 = 10;
const num3 = 2

console.log(num1 + num2 * num3);

/*

Prescedência de operadores aritméticos

1º- ()
2º- **
3º- *
4º- /
5º- %
6º- +
7º- -

*/

let contador = 1;  // Operador de incremento (++)
++contador; // 1
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5

--contador; // Operador de decremento (--)

// console.log(++contador); (não é uma boa prática de programação colocar na mesma line)

console.log(contador);

/* 
 Operadores de Atribuição
 - (*=)
 - (/=)
 - (+=)
 - (-=)
 - (**=)
 - (%=)
*/ 
const step = 2;
let contador2 = 0;

contador2 += step;
contador2 += step;
contador2 += step;
contador2 += step;
console.log(contador2);


// NaN = not a number / parseInt (inteiro), parseFloat (casa decimal), Number(todos).

const num4 = 10;
const num5 = Number('5');

console.log(num4 + num5);



