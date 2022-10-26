// let umaString = "Um \"texto\"";

//Indice         01234567
let umaString = "Um texto";

console.log(umaString[4]);

console.log(umaString.charAt(6));

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto')); // Para descobrir em qual índice começa a palavra.
console.log(umaString.indexOf('m', 1)); // Para buscar um valor a partir de um índice específico.
console.log(umaString.indexOf('m', 1)); // Para descobrir em qual índice começa a palavra iniciando a busca de trás para frente. 

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/[a-z]/g));

console.log(umaString.replace(/Um/, 'Outro')); // Para substituir uma palavra específica

console.log(umaString.replace(/t/g, '#')); // Para substituir repetidamente 

console.log(umaString.length); // Para contar quantos indices tem uma string

console.log(umaString.slice(0, 2)); // Para recortar uma palavra específica de uma string

console.log(umaString.split(' '));

console.log(umaString.toLocaleUpperCase); // Para deixar a string em maiúsculo.

console.log(umaString.toLocaleLowerCase); // Para deixar a string em minúsculo.











