let num = prompt('Digite um número:');

document.body.innerHTML += `<strong>Seu número é: ${num}</strong> <br>`

document.body.innerHTML += `Raiz quadrada: ${num ** (1/2)} <br>`
num = Number(num);
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} <br>`
document.body.innerHTML += `É NaN? ${Number.isNaN(num)} <br>`
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)} <br>`
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)} <br>`
document.body.innerHTML += `Com duas casa decimais ${num.toFixed(2)}`