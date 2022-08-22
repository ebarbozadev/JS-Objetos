const cliente = {
    nome: "Emanuel Marcos",
    idade: 18,
    cidade: "Umuarama",
    email: "e.barboza@edu.unipar.br",
    fones: ["5544999999999", "5544988888888"]
}

// Criando um objeto dentro de um objeto
cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Julia";
// Alterando um valor do objeto dentro do objeto

console.log(cliente);