//Date é uma função contrutora

/*
const gapHora = 60 * 60 * 3 * 1000;

const umDia = 60 * 60 * 24 * 1000;

const data = new Date(0 + gapHora + umDia); // 01/01/1970 Timestamp Unix ou Época Unix

new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

*/


const data = new Date('2019-04-20 20:20:59'); 

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('MS', data.getMilliseconds());
console.log('Dia Semana', data.getDay());


console.log(data.toString());



