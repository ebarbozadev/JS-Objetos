const cliente = {
    nome: "Emanuel Marcos",
    idade: 18,
    cidade: "Umuarama",
    email: "e.barboza@edu.unipar.br"
}

const chaves =  ["nome", "idade", "cidade", "email"];
// Array com as chaves do objeto que queremos

chaves.forEach(chave => {
    console.log(cliente[chave]);
    // Não precisamos controlar o loop, o forEach torna o parâmetro como um contador, então é só colocar ele ali que automaticamente vai passando por meio do array
})

// Buscamos o array chaves colocando o índice da chave que queremos buscar no objeto
// console.log(cliente[chaves[0]]);
// console.log(cliente.nome);
// console.log(cliente["nome"]);