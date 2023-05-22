let infoProjetos = [];

function infoProjeto(nome,horas,finalizado){
    infoProjetos.push(nome);
    infoProjetos.push(horas);
    infoProjetos.push(finalizado);
    return infoProjetos;
}

console.log(infoProjeto("Sistemas de passagens", 30, true));