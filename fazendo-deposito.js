const cliente = {
    nome: "Emanuel Marcos",
    idade: 18,
    cidade: "Umuarama",
    email: "e.barboza@edu.unipar.br",
    fones: ["5544999999999", "5544988888888"],
    dependentes: [
        {
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
        },
        {
            nome: "Sonia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo)
cliente.depositar(30);
console.log(cliente.saldo)