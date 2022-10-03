/*
Sintaxe da classe
class nomeClasse {
    constructor(atributos)
}

*/
class Cliente{
    // Essas são as características
    constructor(nome, email, cpf, saldo){
        // Essas são as características
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    
    // Esses são os comportamentos  
    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(`Seu saldo é ${this.saldo}`);
    }
}

// Criando um novo cliente com o objeto
const emanuel = new Cliente("Emanuel", "e.barboza@edu.unipar.br", "000.000.000-00", 300);

// Exibir os dados do cliente
// console.log(emanuel);

// Cliente depositando dinheiro e mostrando dado na tela
emanuel.depositar(10);
// console.log(emanuel);

// Exibindo a mensagem de saldo do cliente
// emanuel.exibirSaldo();

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        // Super pega as características da classe herdada e passa para as características e os comportamentos que colocamos
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
        console.log(`Sua poupança é ${this.saldoPoupanca}`)
    }
}

const gabriel = new ClientePoupanca("Gabriel", "gabriel@email.com.br", "000.000.000-00", 4000, 200);
console.log(gabriel);

gabriel.depositarPoupanca(200);
console.log(gabriel);