const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const ipeso = e.target.querySelector('#ipeso');
    const ialtura = e.target.querySelector('#ialtura');

    const peso = Number(ipeso.value);
    const altura = Number(ialtura.value) / 100;

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg);
});

function getNivelImc(imc){
    const lista = document.querySelector('#lista2');
    const itens = lista.querySelectorAll('li');

    if (imc > 40) return itens[6].textContent;
    if (imc >= 35) return itens[5].textContent;
    if (imc >= 30) return itens[4].textContent;
    if (imc >= 25) return itens[3].textContent;
    if (imc >= 18.5) return itens[2].textContent;
    if (imc < 18.5) return itens[1].textContent;
    else return "Erro no cálculo do IMC";
    
}

function getImc(peso, altura) {
    const imc = (peso / altura ** 2);
    return imc.toFixed(2);
}

function criaP(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    return p;

}

function setResultado(msg){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP(msg);

    resultado.appendChild(p);
    
}

  