const num = Number(prompt('Digite um número:'));

const numTitulo = document.getElementById('num-titulo');
const textoGeral = document.getElementById('texto');

numTitulo.innerHTML = num;

textoGeral.innerHTML += `<p>Raiz quadrada: ${num ** (1/2)}</p>`
textoGeral.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`
textoGeral.innerHTML += `<p>É NaN? ${Number.isNaN(num)} </p>`
textoGeral.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)} </p>`
textoGeral.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)} </p>`
textoGeral.innerHTML += `<p>Com duas casa decimais ${num.toFixed(2)} </p>`