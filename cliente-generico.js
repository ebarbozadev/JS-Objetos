function Cliente(nome, idade, cidade, email, saldo){
    this.nome = nome;
    // This é usado para setarmos "este" camponente vai receber o dado deste.
    this.idade = idade;
    this.cidade = cidade;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}
const cliente = {
    nome: "Emanuel Marcos",
    idade: 18,
    cidade: "Umuarama",
    email: "e.barboza@edu.unipar.br"
}

const andre = new Cliente("Emanuel", 19, "Umuarama", "e.barboza@edu.unipar.br", 1300);

console.log(andre);