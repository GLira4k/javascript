// Operadores Ternarios - ? :

//const variavel = condicao ? valorSeTrue : valorSeFalse;

const pontUsuario = 999;
const nivelUsuario = pontUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario), corPadrao;

/*
if (pontUsuario >= 1000){
    console.log('Usuário Vip');
} else {
    console.log('Usuário Normal');
} 
*/
