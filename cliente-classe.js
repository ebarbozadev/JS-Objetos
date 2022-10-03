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
console.log(emanuel);

// Cliente depositando dinheiro e mostrando dado na tela
emanuel.depositar(10);
console.log(emanuel);

// Exibindo a mensagem de saldo do cliente
emanuel.exibirSaldo();