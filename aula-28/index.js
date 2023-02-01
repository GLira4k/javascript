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
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('MS', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 = Domingo - 6 = Sábado

console.log(data.toString());

console.log(Date.now); // Conta os milesimos de segundo do marco zero até a data atual

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}


function formataData(data2){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}


const data2 = new Date();

const dataBrasil = formataData(data2);
console.log(dataBrasil);

