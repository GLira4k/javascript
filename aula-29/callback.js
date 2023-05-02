// funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado){
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado(function(){
    return 'Olá, mundo!'
})

/* 
 Callback é uma função, passada como argumento em outra função
  e depois de algum tempo ela vai ser chamada de volta. 
*/