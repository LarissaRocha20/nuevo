let estoque = [10,23,15,78];

let vendidos = [3,20,10,13];

let restante = [];

function prodRestantes(emEstoque, saida){
    // let resProd01 = vendidos[0] - saida[0];
    // let resProd02 = vendidos[2] - saida[2];
    // console.log(resProd01);
    // console.log(resProd02);

    for(let i = 0; i < emEstoque.length; i++){
        let dif = emEstoque[i] - saida[i];
        restante.push(dif);
    }
    return restante;
}

console.log(prodRestantes(estoque, vendidos))

// const result = prodRestantes(estoque, vendidos);]
//console.log(result); -> se fosse usar o jeito de cima