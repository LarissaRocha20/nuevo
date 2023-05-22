
    let infoEstoque = {
        Celular: 150,
        FoneOuvido: 55,
        Pendrive: 37,
        CaixaAudio: 28,
        Tablet: 32,
        CarregadorPortatil: 29
    }

    let infoVend = {
        Celular: 38,
        FoneOuvido: 10,
        Pendrive: 17,
        CaixaAudio: 8,
        Tablet: 5,
        CarregadorPortatil: 15
    }
    
    function calcQuant(infoEstoque,infoVend){
        let result = {}; 
        for(let prod in infoEstoque) {
           result[prod] = infoEstoque[prod] - infoVend[prod]; 
        } 
        return result
    }
    console.log(calcQuant(infoEstoque,infoVend));


/*
    let infoEstoque = [  
        {produto: "Celular", unidade: 150},
        {produto: "Fone de ouvido", unidade: 55},
        {produto: "Pendrive", unidade: 37},
        {produto: "Caixa de aúdio", unidade: 28},
        {produto: "Tablet", unidade: 32},
        {produto: "Carregador portátil", unidade: 29}
    ];

    let infoVend = [  
        {produto: "Celular", unidade: 38},
        {produto: "Fone de ouvido", unidade: 10},
        {produto: "Pendrive", unidade: 17},
        {produto: "Caixa de aúdio", unidade: 8},
        {produto: "Tablet", unidade: 5},
        {produto: "Carregador portátil", unidade: 15}
    ];

    function calcQuant(){
        for( prod in infoEstoque){
            rest = infoEstoque[prod].unidade - infoVend[prod].unidade;
            console.log(infoEstoque[prod].produto + " - " + infoEstoque[prod].unidade + " - " + infoVend[prod].unidade + " = " + rest);
        }
    }
*/