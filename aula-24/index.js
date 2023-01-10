/* 
Entre 0 - 11 = Bom dia!

Entre 12 - 17 = Boa tarde!

Entre 18 - 23 = Boa noite!
*/


/*
If - Pode ser utilizado sozinho

else - Precisa de uma palavra If antes para ser utilizado, so posso ter um else na checagem

else if - Posso ter vários else ifs na checagem
*/


const hora = 10;

if (hora >= 0 && hora <= 11){
  console.log('Bom dia!');

} else if (hora >= 12 && hora <= 17){
  console.log('Boa tarde!');

} else if (hora >= 18 && hora <= 23){
  console.log('Boa noite!');

} else {
  console.log('Olá');
}


const tenhoGrana = false;

if (tenhoGrana){
  console.log('Vou sair de casa')

} else {
  console.log('Não vou sair de casa');
}



