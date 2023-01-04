//IIFE = Immediately Invoked Function Expression

function meuEscopo () {
    const form = document.querySelector('#form'); // Selecionando uma tag, id ou class no html (.form (para Class) form (para tag))
    const resultado = document.querySelector('.resultado'); 

    const pessoas = [] //Array vazio para quando clicar em "enviar" o valor preenchido nos campos ser enviado para cá
    
    function recebeEventoForm (evento){
        evento.preventDefault();
        
        const nome = form.querySelector('#inome');
        const sobrenome = form.querySelector('#isobrenome');
        const peso = form.querySelector('#ipeso');
        const altura = form.querySelector('#ialtura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
        
    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();

