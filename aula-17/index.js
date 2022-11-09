function saudacao(nome) {
  console.log(`Bom dia, ${nome}!`);

  return `Bom dia, ${nome}!`;
}

const variavel = saudacao('Gabriel');
console.log(variavel); 

function soma(x,y){
  const resultado = x+y; //Essa variável está protegida dentro do escopo da function
  return resultado; //Ao adicionar return nada abaixo será executado
}

console.log(soma(1,2));

function soma2(x = 1, y = 1){
  const resultado = x + y;
  return resultado;
}

console.log(soma2(1,2));

const raiz = function (n){
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


const raiz2 = n => n ** 0.5; //Arrow function

console.log(raiz2(9));



