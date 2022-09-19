const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12543652266',
    email: 'andre@email.com',
    fones: [ '5591235498', '5521988743124' ],
    dependentes: [
      {
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011' },
      {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
      }
    ],
    saldo:100,
    depositar:function(valor){
      this.saldo += valor
    }
}

function oferecerSeguro(obj){
    // obj é o parâmetro, é o nome do objeto que vamos ler
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        // Includes é uma função de array (visto que transformamos o propsClientes nume array) que vê se tem aquela determinada palavra escrita, no array
        // Esse include retorna um true ou false
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } else{
        console.log(`${obj.nome}, você não tem dependentes`);
    }
}
idade(cliente);

oferecerSeguro(cliente);