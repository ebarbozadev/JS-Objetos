
const cliente = {
    nome: "Emanuel Marcos",
    idade: 18,
    cidade: "Umuarama",
    email: "e.barboza@edu.unipar.br",
    fones: ["5544999999999", "5544988888888"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
}
// .push é uma função que nos permite adicionar algo num array, visto que transformamos a chave dependentes em um array, ele só funciona em array
cliente.dependentes.push({
    nome: "Sonia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente);

// Acessando cada chave do dependentes
// cliente.dependentes.forEach(chave => {console.log(chave)})

// Utilizando filtro para pegar a filha mais nova
const filhaMaisNova = cliente.dependentes.filter(dependente => {dependente.dataNasc === "04/01/2014"});