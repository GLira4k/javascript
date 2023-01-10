/*

&& -> false && true - caso for 'false' o js vai me retornar o valor literal 'false' encontrado, se for true o js vai me retornar o ultimo valor avaliado da expressão

|| -> true || false -> vai retornar o valor literal 'true'

Em JS tudo pode ser avaliado, false ou true

Falsy values

- false

- 0

- "", '' e `` (string vazia)

- null / undefined

- NaN 

*/

console.log("Luiz" && NaN && "Maria");

function falaOi() {
  return "Oi";

 }

let vaiExecutar = undefined;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Gabriel' || undefined || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);


const a = 0;
const b = null;
const c = undefined;
const d = "d";
const e = false;

console.log(a || b || c || d || e);

