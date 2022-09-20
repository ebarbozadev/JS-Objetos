const cliente = [
    {
        nome: "André",
        cpf: "123123123123",
        dependentes: [{
            nome: "Sara",
            parentesco: "Filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "Filha",
            dataNasc: "04/08/2016"
        }]
    },
    {
        nome: "Juliana",
        cpf: "456456",
        dependentes: [{
            nome: "Carlos",
            parentesco: "Filho",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Paulo",
            parentesco: "Filho",
            dataNasc: "04/08/2016"
        },
        {
            nome: "Emanuel",
            parentesco: "Primo",
            dataNasc: "18/04/2010"
        }]
    }
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes];

console.table(listaDependentes);