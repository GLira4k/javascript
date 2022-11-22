/*
Primitive types (valores imutáveis) - string, boolean, number, undefined, null, bigint e symbol. - valores copiados
*/
//          0123456
let nome = 'Gabriel';
nome[0] = 'R';
console.log(nome[0], nome); // exemplo de imutáveis

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

/*
Reference types (mutável)- Array, object e function - Passados por referência
*/

let c = [1, 2, 3];
let d = [...c]; // para criar cópia 
let e = d;
console.log(c, d);

c.push(4); //Apontam para o mesmo valor na memória, por isso são mutáveis, caso os valores sejam alterados ambos vão mudar
console.log(c, d);

d.pop();
console.log(c, d);

console.log(e);

const f = {
  nome: 'Gabriel',
  sobrenome:'Lira'
};

const g = {...f};

f.nome = 'Davi';

console.log(g);
console.log(f);






