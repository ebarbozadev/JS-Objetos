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

const andre = new Cliente("Emanuel", 19, "Umuarama", "e.barboza@edu.unipar.br", 1300);

console.log(andre);

function ClientePoupanca(nome, idade, cidade, email, saldo, saldoPoup){
    Cliente.call(this,nome, idade, cidade, email, saldo);
    // O call está chamando as propriedades de Cliente para o Cliente Poupança.
    // O this é referente a este objeto que estou criando "ClientePoupanca" e recebe os mesmos parâmetros daquele objeto.
    this.saldoPoup = saldoPoup;
}

const gabriel = new ClientePoupanca("Gabriel Wellington Mortean", 23, "Maringá", "g.mortean@edu.unipar.br", 3000, 200);

console.log(gabriel);

ClientePoupanca.prototype.depositarPoup = function(valor){
// Acessou todas as categorias de ClientePoupanca e adicionou uma nova categoria, que é a função depositarPoup.
    this.saldoPoup += valor;
}

gabriel.depositarPoup(30);

console.log(gabriel);