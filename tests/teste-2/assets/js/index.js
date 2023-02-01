const button1 = document.querySelector('#botao1');

button1.addEventListener("click", showAlert);

const button2 = document.querySelector('#botao2');

button2.addEventListener("click", showAlert2);

const button3 = document.querySelector('#botao3');

button3.addEventListener("click", showAlert3);

function showAlert(){
    alert('Você clicou no botão 1');
}

function showAlert2(){
    alert('Você clicou no botão 2')
}

function showAlert3(){
    alert('Você clicou no botão 3')
}