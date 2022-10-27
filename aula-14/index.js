//IEEE 751-2008

let num1 = 10500; // Number
let num2 = 2.3; // Number

console.log(num1.toString() + num2); // Para transformar um number em string temporáriamente

//num1 =  num1.toString(); Para transformar um number em string 

console.log(num1.toString(2)); // Para transformar um number em representação binária 

let num3 = 10.5668897123;

console.log(num3.toFixed(2)); // Para arredondar casas decimais de um número

console.log(Number.isInteger(num1)); // Para consultar se um número recebido é inteiro
console.log(Number.isInteger(num3)); // True para inteiro / False para ponto flutuante

let temp = num1 * 'Olá';

console.log(Number.isNaN(temp)); // Para consultar se um valor recebido é um NaN

let num4 = 0.7;
let num5 = 0.1;

num4 += num5; // num4 = num4 + num5; / 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0

// num4 = num4.toFixed(2); JS não reconhece como inteiro, porque analisa o código binário

num4 = Number(num4.toFixed(2));

console.log(num4);

console.log(Number.isInteger(num4));

