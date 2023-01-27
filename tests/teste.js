const num1 = 5;
const num2 = 10;

const resultado = maiorNumero();

function maiorNumero(){
    if (num1 > num2){
    return num1;
    } else if (num2 > num1){
    return num2;
 }
}  

console.log(resultado);

const string1 = 'Gabriel'
const string2 = 'Gabriel Xavier'
const string3 = 'Gabriel Xavier Lira'

const resultado2 = maiorString();

function maiorString(){
    if (string1.length > string2.length && string1.length > string3.length ){
    return string1;
} else if (string2.length > string1.length && string2.length > string3.length ){
    return string2;
} else {
    return string3
}
}

console.log(resultado2);


