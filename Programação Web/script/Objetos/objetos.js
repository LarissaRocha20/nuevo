/*  Tipo object no JS 
    É uma coleção de dados(heterogênea) no formato 
    chave:valor, dentro de chaves {} 
    Sintaxe: 
        tipo(let/var/const) obj = {
        	chave:valor,
        	chavex:valorx,
            ...
        }
*/

let cadastro = {
    nome: "João Pedro",
    salario: 1930,
    dependentes: true,
    idade: 25,
    peso: 75.8  // No último par a chave:valor não é obrigatório a vírgula
}

//Acesso
console.log(cadastro.nome);
console.log(cadastro.idade);
//alert(cadastro.nome);

// Modificar o valor
cadastro.salario = 2700;
// Propriedade do objeto
console.log(cadastro);

let cliente = {
    nome: "João Pedro",
    salario: 1930,
    dependentes: true,
    idade: 25,
    peso: 75.8,
    endereco:{
        rua: "Rua 13 de Maio",
        numero: 595,
        bairro: "Planalto",
        cep: "63500-773"
    },
    pedido: function (ped, pre ,des) {
            console.log(ped);
            let preFinal = pre - des;
            console.log(preFinal);

    }
}
console.log(cliente.endereco.cep);

cliente.pedido("Celular", 2500, 150);

