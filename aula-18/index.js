const pessoa01 = {
    nome: 'Gabriel',
    sobrenome: 'Lira',
    idade: 21,
    
    fala() {
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa ('Gabriel', 'Lira', 21)
const pessoa2 = criaPessoa ('Lucas', 'Lira', 24)
const pessoa3 = criaPessoa ('Sara', 'Lira', 15)
const pessoa4 = criaPessoa ('Luciano', 'Lira', 51)
const pessoa5 = criaPessoa ('Sandra', 'Lira', 46)

console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);


