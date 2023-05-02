/*

 Promise

 A promessa de que algo irá acontecer, poderá dar certo ou errado, mas irá acontecer

 Pending: Estado inicial, assim que o Objeto da promessa é iniciado

 Fulfilled: A promessa foi concluida com sucesso

 Rejected: A promessa foi rejeitada, houve um erro

 Settled: Seja com sucesso ou com erro, ela foi finalmente concluída

 */

let aceitar = false;

console.log("Pedir uber");

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("o motorista aceitou o pedido e chegará em breve");
  } else {
    return reject("pedido cancelado pelo motorista");
  }

});

promessa
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))
  .finally(() => console.log('finalizada'));

console.log("aguardando");

