// Os arrays são objetos indexados.

//Os arrays são indexados por elemento. 

//                 0        1         2       3        4
const alunos = ['Luiz', 'Gabriel', 'Sara', 'Lucas', 'Vitor'] // Manter array com apenas um tipo de dado, não é uma boa prática de programação mesclar os tipos.

alunos [alunos.length] = 'Gabriela'; // Para adicionar um item ao final do array.
alunos [alunos.length] = 'Julia';
alunos [alunos.length] = 'Pablo';

alunos.push('Junior'); // Para adicionar um item ao final do array de forma mais prática.

alunos.unshift('Breno'); // Para adicionar um elemento ao início do array.

alunos.pop(); // Para remover um elemento ao final do array.

const removido = alunos.pop(); // Para salvar o elemento removido em uma variável.

alunos.shift(); // Para remover um elemento ao início do array.

const removido2 = alunos.shift();// Para salvar o elemento removido em uma variável.

delete alunos[1]; // Pra apagar um elemento da array, sem alterar os índices.

console.log(removido2);

console.log(removido);

console.log(alunos)

console.log(alunos.length); // Para saber o número de elementos.

console.log(alunos[2]); // Para selecionar um elemento da array.

console.log(typeof alunos);
console.log(alunos instanceof Array);

