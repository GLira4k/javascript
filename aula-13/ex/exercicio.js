const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `O seu nome é ${nome}. <br>`


document.body.innerHTML += `O seu nome tem ${nome.length} letras. <br>`

document.body.innerHTML += `A segunda letra do seu nome é:${nome.indexOf(1)}. <br>`

document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? ${nome.indexOf('a')} <br>`



document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase} <br>`

document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase} <br>`
