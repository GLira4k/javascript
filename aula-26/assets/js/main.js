const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const ipeso = e.target.querySelector('#ipeso');
    const ialtura = e.target.querySelector('#ialtura');

    const peso = Number(ipeso.value);
    const altura = Number(ialtura.value);
});

function criaP() {

    const p = document.createElement('p');
    return p;

}

function setResultado(msg){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
}
