const cliente = {
    nome: "Emanuel Marcos",
    idade: 18,
    cidade: "Umuarama",
    email: "e.barboza@edu.unipar.br"
}

console.log(cliente);

cliente.telefone = "+55 44 99999-9999";
// Para adicionar alguma chave num objeto, basta criar uma nova chave e atribuir um valor.

console.log(cliente);

cliente.telefone = "+55 44 98888-8888";
// Aqui vemos que ele re-escreve no lugar do valor anterior

console.log(cliente);